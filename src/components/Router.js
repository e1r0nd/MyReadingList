import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import ListItems from "./ListItems/ListItems";
import Stats from "./Stats/Stats";
import Import from "./Import";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Shade from "../components/Shade/Shade";

import MyProvider from "./Provider";

class Router extends Component {
  render() {
    return (
      <Fragment>
        <MyProvider>
          <BrowserRouter>
            <Fragment>
              <Shade />
              <Navigation />
              <main className="main">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/book/wishlist" />}
                  />
                  <Route path="/book/:viewId" component={ListItems} />
                  <Route path="/stats" component={Stats} />
                  <Route path="/import" component={Import} />
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
