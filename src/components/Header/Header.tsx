import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ModalButton from "../ModalButton/ModalButton";
import RulesUI from "../../entities/rules/ui/RulesUI";
import { AppDispatch, RootState } from "../../app/storeTypes";
import { getRules } from "../../entities/rules/model/rulesActions";

import "./header.css";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.rulesReducer);

  useEffect(() => {
    if (isLoading) {
      dispatch(getRules());
    }
  }, [dispatch, isLoading]);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        7 quizzes
      </Link>
      <ModalButton buttonText="game rules" content={<RulesUI />} />
    </header>
  );
};

export default Header;
