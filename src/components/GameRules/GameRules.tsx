import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import "./gameRules.css";

export type Props = {
  rules: Array<string>;
};

const GameRules = ({ rules }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="rules">
      <p className="rules__title">Game rules</p>
      <div className="rules__info">
        {rules.map((rule, i) => (
          <p className="rules__info-topic" key={i}>
            {rule}
          </p>
        ))}
      </div>
      <Button
        className="rules__button-submit button__start"
        onClick={() => navigate("/game")}
        text="Start"
      />
    </div>
  );
};

export default GameRules;
