import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../app/storeTypes";

import "./rulesUI.css";

const RulesUI = () => {
  const { rules } = useSelector((state: RootState) => state.rulesReducer);

  return (
    <div className="rules__info">
      <p className="rules__info-topic">{rules}</p>
    </div>
  );
};

export default RulesUI;
