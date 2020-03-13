import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      Anime Collection
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
        <Link className="menu-item" to="/login">
          login
        </Link>
      </ul>
    </div>
  );
}

export default Header;
