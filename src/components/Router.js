import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import MyProvider from "./Provider";

class Router extends Component {
  render() {
    return (
      <Fragment>
        <MyProvider>
          <BrowserRouter>
            <Fragment>
              <Navigation />
              <main className="main">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/book/wishlist" />}
                  />
                  <Route path="/book/:viewId" component={ListItems} />
                  <Route path="/stats" component={App} />
                  <Route component={NotFound} />
                </Switch>
              </main>
            </Fragment>
          </BrowserRouter>
          <Footer />
        </MyProvider>
      </Fragment>
    );
  }
}

export default Router;
