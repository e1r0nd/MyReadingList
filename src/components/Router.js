import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";

class Router extends Component {
  state = {
    items: []
  };

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListItems} />
            <Route path="/page/:pageId" component={App} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Router;
