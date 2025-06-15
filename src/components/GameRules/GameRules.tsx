import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import "./gameRules.css";
import RulesUI from "../../entities/rules/ui/RulesUI";

const GameRules = () => {
  const navigate = useNavigate();

  return (
    <div className="rules">
      <p className="rules__title">Game rules</p>
      <RulesUI />
      <Button
        className="rules__button-submit button__start"
        onClick={() => navigate("/game")}
        text="Start"
      />
    </div>
  );
};

export default GameRules;
