import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/index";
import Hanfu from "../pages/hanfu";

export default function Routes() {
  return (
    <Switch>
      <Route path="/hanfu">
        <Hanfu />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
