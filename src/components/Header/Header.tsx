import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        7 quizzes
      </Link>
      <Link to="/" className="header__rules">
        game rules
      </Link>
    </header>
  );
};

export default Header;
