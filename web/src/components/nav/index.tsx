import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

export default function Nav() {
  return (
    <nav className="comp-nav">
      <ul>
        <li>
          <Link to="/home">logo</Link>
        </li>
        <li>
          <Link to="/hanfu">汉服</Link>
        </li>
        <li>
          <Link to="/login">唯美</Link>
        </li>
        <li>
          <Link to="/">其他</Link>
        </li>
      </ul>
    </nav>
  );
}
