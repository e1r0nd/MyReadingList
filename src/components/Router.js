import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListItems from "./ListItems/ListItems";
import App from "./App/App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ListItems} />
      <Route path="/page/:pageId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
