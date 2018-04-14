import React, { Component, createContext } from "react";
import idbKeyval from "idb-keyval";
import PropTypes from "prop-types";
import firebase from "firebase";
import sampleBooks from "../sample-books";
import base, { firebaseApp } from "../base";

export const MyContext = createContext();

class MyProvider extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  state = {
    title: "",
    books: {},
    query: "",
    currentBook: {
      author: "",
      date: "",
      mark: "",
      order: "",
      tag: "",
      title: "",
      quote: ""
    },
    currentIndex: "",
    sideNavs: {},
    uid: "",
    userName: ""
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ books: "" });
      user ? this.authHandler({ user }) : this.loadLocalBooks();
    });
  }

  componentDidUpdate() {
    if (
      (this.state.uid && !this.state.userName) ||
      (!this.state.uid && this.state.userName) ||
      (this.state.uid && this.state.userName && !this.ref)
    ) {
      return;
    }
    const dbTitle =
      this.state.uid && this.state.userName
        ? this.state.userName.replace(/\s/g, "")
        : "localBooks";

    console.log(
      "componentDidUpdate:",
      dbTitle,
      Object.keys(this.state.books).length
    );
    Object.keys(this.state.books).length &&
      idbKeyval.set(dbTitle, this.state.books);
  }

  loadLocalBooks = () => {
    idbKeyval.get("localBooks").then(idbKeyvalRef => {
      console.log(sampleBooks);
      const books = idbKeyvalRef ? idbKeyvalRef : sampleBooks;

      this.setState({ books });
      if (!idbKeyvalRef) {
        idbKeyval.set("localBooks", books);
      }
    });
  };

  authHandler = async authData => {
    this.setUserId(authData.user.uid, authData.user.displayName);
    const books = await base.fetch(authData.user.uid, { context: this });

    await this.setState({ books });
    await this.syncStart();
  };

  syncStart = () => {
    console.log("Sync start:", this.state.uid);

    this.ref = base.syncState(`${this.state.uid}`, {
      context: this,
      state: "books"
    });
  };

  syncStop = () => {
    console.log("Sync stop:", this.state.books);
    base.removeBinding(this.ref);
  };

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  setUserId = (uid, userName) => {
    this.setState({ uid });
    this.setState({ userName });
  };

  // eslint-disable-next-line
  logout = async () => {
    await firebase.auth().signOut();
    await this.setUserId("", "");
    await this.syncStop();
    await this.loadLocalBooks();
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setSideNav: (name, state) => {
            this.setState({ [name]: state });
          },
          updateTitle: title => {
            this.setState({ title });
          },
          updateQuery: query => {
            this.setState({ query });
          },
          setCurrentBook: (currentIndex = "") => {
            const emptyBook = {
              author: "",
              date: "",
              mark: "",
              order: "",
              title: "",
              quote: ""
            };
            const currentBook = this.state.books[currentIndex] || emptyBook;
            this.setState({ currentBook });
            this.setState({ currentIndex });
          },
          changeBook: currentBook => {
            console.log("change");
            this.setState({ currentBook });
          },
          updateBook: updatedBook => {
            console.log("update");
            const books = { ...this.state.books };
            books[this.state.currentIndex] = updatedBook;
            this.setState({ books });
          },
          addBook: book => {
            console.log("add");
            const books = { ...this.state.books };
            books[`book${Date.now()}`] = book;
            this.setState({ books });
          },
          loadLocalBooks: () => {
            this.loadLocalBooks();
          },
          LogInOut: () => {
            this.state.uid ? this.logout() : this.authenticate();
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
