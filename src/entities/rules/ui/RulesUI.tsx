import React from "react";

import { useGetRulesDataQuery } from "../api/RulesAPI";

import "./rulesUI.css";

const RulesUI = () => {
  const { data: rules } = useGetRulesDataQuery();

  return (
    <div className="rules__info">
      <p className="rules__info-topic">{rules}</p>
    </div>
  );
};

export default RulesUI;
