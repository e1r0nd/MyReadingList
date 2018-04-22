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
    previousTitle: "",
    books: {},
    listedBooks: [],
    query: "",
    currentBook: {
      author: "",
      date: "",
      list: "",
      mark: "",
      title: ""
    },
    currentIndex: "",
    uid: "",
    userName: "",
    modal: {
      show: false,
      title: "",
      action: "",
      hideForm: null
    }
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
          setSideNav: (name, state, action) => {
            const modal = { ...this.state.modal, hideForm: action };
            "BookForm" === name &&
              action &&
              !this.state.modal.hideForm &&
              this.setState({ modal });
            this.setState({ [name]: state });
          },
          updateTitle: title => {
            if ("Statistics" !== title && this.state.query) {
              title = "Search...";
            }
            this.setState({ title });
          },
          updateQuery: query => {
            if (query) {
              if ("Search..." !== this.state.title) {
                this.state.previousTitle &&
                  this.setState({ previousTitle: this.state.title });
                this.setState({ title: "Search..." });
              }
            } else {
              this.setState({ title: this.state.previousTitle });
              this.setState({ previousTitle: "" });
            }
            this.setState({ query });
          },
          setCurrentBook: (currentIndex = "") => {
            const emptyBook = {
              author: "",
              date: "",
              mark: "",
              order: "",
              title: ""
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
          removeBook: index => {
            console.log(index);
            const books = { ...this.books };
            books[index] = null;
            this.setState({ books });
          },
          setListedBooks: listedBooks => {
            this.setState({ listedBooks });
          },
          updateOrder: listedBooks => {
            console.log(listedBooks);
            // console.log(this.state.books);

            const books = Object.keys(this.state.books).map(key => {
              const book = { ...this.state.books[key] };
              book.order = listedBooks.indexOf(key);

              return book;
            });
            // console.log(books);
            this.setState({ books });
          },
          loadLocalBooks: () => {
            this.loadLocalBooks();
          },
          LogInOut: () => {
            this.state.uid ? this.logout() : this.authenticate();
          },
          showModal: (title, action) => {
            const modal = {
              ...this.state.modal,
              show: true,
              title,
              action
            };
            this.setState({ modal });
          },
          hideModal: () => {
            const modal = {
              ...this.state.modal,
              show: false,
              title: "",
              action: ""
            };
            this.setState({ modal });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
