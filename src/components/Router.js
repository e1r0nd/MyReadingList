import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import sampleBooks from "../sample-books";
import base from "../base";
import idbKeyval from "idb-keyval";
import addPropsToRoute from "./AddPropsToRoute";

class Router extends Component {
  state = {
    books: {},
    uid: "",
    userName: ""
  };

  syncStart = () => {
    console.log(this.state.uid);
    this.ref = base.syncState(`${this.state.uid}`, {
      context: this,
      state: "books"
    });
  };

  componentDidMount() {
    this.bookService.loadLocalBooks();
  }

  componentDidUpdate() {
    idbKeyval.set("localBooks", this.state.books);
  }

  bookService = {
    updateBook: (key, updatedBook) => {
      const books = { ...this.state.books };
      books[key] = updatedBook;
      this.setState({ books });
    },

    reloadBooks: books => {
      this.setState({ books });
    },

    loadLocalBooks: () => {
      // https://www.npmjs.com/package/idb-keyval
      idbKeyval.get("localBooks").then(idbKeyvalRef => {
        const books = idbKeyvalRef ? idbKeyvalRef : sampleBooks;

        // eslint-disable-next-line
        this.setState({ books });
        if (!idbKeyvalRef) {
          idbKeyval.set("localBooks", books);
        }
      });
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
    }
  };

  userService = {
    setUserId: (uid, userName) => {
      uid && this.setState({ uid });
      userName && this.setState({ userName });
    }
  };

  render() {
    const passingProps = { books: this.state.books };
    return (
      <Fragment>
        <Navigation
          {...this.state}
          syncStart={this.syncStart}
          bookService={this.bookService}
          userService={this.userService}
        />
        <main className="main">
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                component={addPropsToRoute(ListItems, passingProps)}
              />
              <Route path="/page/:pageId" component={App} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Router;
