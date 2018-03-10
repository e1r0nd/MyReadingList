import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";
import sampleBooks from "../sample-books";
import base from "../base";

class Router extends Component {
  state = {
    books: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("sampleBooks");
    const books = localStorageRef ? JSON.parse(localStorageRef) : sampleBooks;

    this.setState({ books });
    if (!localStorageRef) {
      localStorage.setItem("sampleBooks", JSON.stringify(this.state.books));
    }
    this.ref = base.syncState("sampleBooks/books", {
      context: this,
      state: "books"
    });
  }

  componentDidUpdate() {
    localStorage.setItem("sampleBooks", JSON.stringify(this.state.books));
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
