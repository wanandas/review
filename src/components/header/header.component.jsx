import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      M.A XSION
      <ul className="menu">
        <Link className="menu-item" to="/">
          home
        </Link>
        <Link className="menu-item" to="/review">
          review
        </Link>
        <Link className="menu-item" to="/about">
          about
        </Link>
      </ul>
    </div>
  );
}

export default Header;
