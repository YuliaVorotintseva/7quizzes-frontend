import React from "react";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        7 quizzes
      </a>
      <a href="#" className="header__rules">
        game rules
      </a>
    </header>
  );
};

export default Header;
