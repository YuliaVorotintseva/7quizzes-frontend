import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ModalButton from "../ModalButton/ModalButton";
import RulesUI from "../../entities/rules/ui/RulesUI";
import { AppDispatch, RootState } from "../../app/storeTypes";
import { getRules } from "../../entities/rules/model/rulesActions";
import { logout } from "../../entities/user/model/userActions";

import "./header.css";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.rulesReducer);
  const { isAuthorized } = useSelector((state: RootState) => state.userReducer);
  const name = localStorage.getItem("name");

  useEffect(() => {
    if (isLoading) {
      dispatch(getRules());
    }
  }, [dispatch, isLoading]);

  const onClick = () => {
    dispatch(logout());
    navigate("/signin", { replace: true });
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        7 quizzes
      </Link>
      <div className="header__custom">
        <ModalButton buttonText="game rules" content={<RulesUI />} />
        {isAuthorized && name && (
          <button type="submit" className="btn__logout" onClick={onClick}>
            {name}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6836 3.19531C16.2785 3.19531 16.7567 3.67367 16.7568 4.26855C16.7568 4.86353 16.2786 5.3418 15.6836 5.3418H9.08691C7.52644 5.3418 6.25098 6.61275 6.25098 8.17773V23.8232C6.25123 25.3835 7.52208 26.6582 9.08691 26.6582H15.5781C16.1661 26.6582 16.6513 27.1348 16.6514 27.7314C16.6514 28.3264 16.1731 28.8047 15.5781 28.8047H9.08691C6.34258 28.8047 4.10474 26.5733 4.10449 23.8232V8.17773C4.10449 5.43324 6.33661 3.19531 9.08691 3.19531H15.6836Z"
                fill="#393939"
                stroke="#393939"
                strokeWidth="0.72"
              />
              <path
                d="M21.53 10.7114C21.9505 10.2909 22.628 10.291 23.0486 10.7114L27.5808 15.2437H27.5798C28.0046 15.6627 27.997 16.3451 27.575 16.7671L23.0427 21.2993C22.8328 21.5143 22.5541 21.6157 22.2869 21.6157C22.0113 21.6157 21.7345 21.5038 21.53 21.2993C21.1096 20.8788 21.1096 20.2013 21.53 19.7808L24.2332 17.0786H10.6345C10.0396 17.0785 9.56129 16.6003 9.56128 16.0054C9.56128 15.4105 10.0396 14.9322 10.6345 14.9321H24.2332L21.53 12.23C21.1096 11.8095 21.1096 11.1319 21.53 10.7114Z"
                fill="#393939"
                stroke="#393939"
                strokeWidth="0.72"
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
