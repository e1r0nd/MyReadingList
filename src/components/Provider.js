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

  // bookService = {
  //   updateBook: (key, updatedBook) => {
  //     const books = { ...this.state.books };
  //     books[key] = updatedBook;
  //     this.setState({ books });
  //   },

  //   reloadBooks: books => {
  //     this.setState({ books });
  //   },

  //   loadLocalBooks: () => {
  //     // https://www.npmjs.com/package/idb-keyval
  //     idbKeyval.get("localBooks").then(idbKeyvalRef => {
  //       const books = idbKeyvalRef ? idbKeyvalRef : sampleBooks;

  //       // eslint-disable-next-line
  //       this.setState({ books });
  //       if (!idbKeyvalRef) {
  //         idbKeyval.set("localBooks", books);
  //       }
  //     });
  //   },

  //   syncStart: () => {
  //     console.log(this.state.uid);
  //     this.ref = base.syncState(`${this.state.uid}`, {
  //       context: this,
  //       state: "books"
  //     });
  //   },

  //   syncStop: () => {
  //     base.removeBinding(this.ref);
  //   }
  // };

  // userService = {
  //   setUserId: (uid, userName) => {
  //     uid && this.setState({ uid });
  //     userName && this.setState({ userName });
  //   }
  // };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateBook: (key, updatedBook) => {
            const books = { ...this.state.books };
            books[key] = updatedBook;
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
