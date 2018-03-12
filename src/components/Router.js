import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";
import sampleBooks from "../sample-books";
import base from "../base";
import idbKeyval from "idb-keyval";

class Router extends Component {
  state = {
    books: {}
  };

  componentDidMount() {
    idbKeyval.get("sampleBooks").then(idbKeyvalRef => {
      const books = idbKeyvalRef ? idbKeyvalRef : sampleBooks;

      // eslint-disable-next-line
      this.setState({ books });
      if (!idbKeyvalRef) {
        idbKeyval.set("sampleBooks", books);
      }
      this.ref = base.syncState("sampleBooks/books", {
        context: this,
        state: "books"
      });
    });
  }

  componentDidUpdate() {
    idbKeyval.set("sampleBooks", this.state.books);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/page/:pageId" component={ListItems} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Router;
