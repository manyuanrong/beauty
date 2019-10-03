import React from "react";
import { Link } from "react-router-dom";
import "./nav.less";

export default function Nav() {
  return (
    <nav className="comp-nav">
      <ul>
        <li>
          <Link to="/">logo</Link>
        </li>
        <li>
          <Link to="/hanfu">汉服</Link>
        </li>
        <li>
          <Link to="/">唯美</Link>
        </li>
        <li>
          <Link to="/">其他</Link>
        </li>
      </ul>
    </nav>
  );
}
