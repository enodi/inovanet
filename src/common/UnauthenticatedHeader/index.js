import React from "react";
import { Link } from "react-router-dom";

const UnauthenticatedHeader = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Inovanet</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default UnauthenticatedHeader;