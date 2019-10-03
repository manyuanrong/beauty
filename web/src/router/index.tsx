import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/index";
import About from "../pages/about/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
