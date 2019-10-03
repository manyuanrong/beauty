import React from "react";
import Routes from "./router/index";
import Nav from "./components/nav";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}
