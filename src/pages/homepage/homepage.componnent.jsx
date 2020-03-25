import React from "react";
import { Link } from "react-router-dom";

import "./homepage.styles.scss";

const HomepageComponent = () => {
  return (
    <div className="homepage-container">
      <h2>Welcome to M.A XSION</h2>
      <div className="btn-view">
        <Link className="btn-item" to="/review">
          View Review Anime
        </Link>
        <Link className="btn-item" to="/external">
          For Admin
        </Link>
      </div>
    </div>
  );
};

export default HomepageComponent;
