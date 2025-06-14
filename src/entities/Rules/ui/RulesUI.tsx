import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../app/store";
import { getRules } from "../model/rulesActions";

import "./rulesUI.css";

const RulesUI = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rules } = useSelector((state: RootState) => state.rules);

  useEffect(() => {
    dispatch(getRules());
  }, [dispatch]);

  return (
    <div className="rules__info">
      {rules.map((rule, i) => (
        <p className="rules__info-topic" key={i}>
          {rule}
        </p>
      ))}
    </div>
  );
};

export default RulesUI;
