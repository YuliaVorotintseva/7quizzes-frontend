import React from "react";
import { Link } from "react-router-dom";

import ModalButton from "../ModalButton/ModalButton";
import RulesUI from "../../entities/rules/ui/RulesUI";

import "./header.css";

const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo">
      7 quizzes
    </Link>
    <ModalButton buttonText="game rules" content={<RulesUI />} />
  </header>
);

export default Header;
