import React from "react";
import Routes from "./router/index";
import Nav from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";
import "./common/common.less";
import "./app.less";

export default function App() {
  return (
    <Router>
      <Nav />
      <div className="content">
        <Routes />
      </div>
    </Router>
  );
}
