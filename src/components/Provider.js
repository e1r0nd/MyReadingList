import React, { Component, createContext } from "react";
import idbKeyval from "idb-keyval";
import PropTypes from "prop-types";
import sampleBooks from "../sample-books";
import base from "../base";

export const MyContext = createContext();

class MyProvider extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  state = {
    books: {},
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
    this.loadLocalBooks();
  }

  componentDidUpdate() {
    idbKeyval.set("localBooks", this.state.books);
  }

  loadLocalBooks = () => {
    idbKeyval.get("localBooks").then(idbKeyvalRef => {
      const books = idbKeyvalRef ? idbKeyvalRef : sampleBooks;
      // eslint-disable-next-line
      this.setState({ books });
      if (!idbKeyvalRef) {
        idbKeyval.set("localBooks", books);
      }
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setSideNav: (name, state) => {
            this.setState({ [name]: state });
          },
          setCurrentBook: (currentIndex = "") => {
            const emptyBook = {
              author: "",
              date: "",
              mark: "",
              order: "",
              tag: "",
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
          reloadBooks: books => {
            this.setState({ books });
          },
          loadLocalBooks: () => {
            this.loadLocalBooks();
          },
          syncStart: () => {
            console.log(this.state.uid);
            this.ref = base.syncState(`${this.state.uid}`, {
              context: this,
              state: "books"
            });
          },
          syncStop: () => {
            base.removeBinding(this.ref);
          },
          setUserId: (uid, userName) => {
            uid && this.setState({ uid });
            userName && this.setState({ userName });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
