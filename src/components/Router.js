import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
// import addPropsToRoute from "./AddPropsToRoute";
import MyProvider from "./Provider";

class Router extends Component {
  render() {
    // const passingProps = { books: this.state.books };
    return (
      <Fragment>
        <MyProvider>
          <Navigation />
          <main className="main">
            <BrowserRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                  // component={addPropsToRoute(ListItems, passingProps)}
                  component={ListItems}
                />
                <Route path="/page/:pageId" component={App} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </main>
          <Footer />
        </MyProvider>
      </Fragment>
    );
  }
}

export default Router;
