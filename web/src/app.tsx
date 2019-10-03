import React from "react";
import Nav from "./components/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./common/common.less";
import "./app.less";
import Home from "./pages/home";
import Hanfu from "./pages/hanfu";
import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/hanfu" component={Hanfu}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}
