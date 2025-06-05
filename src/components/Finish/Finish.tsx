import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import "./finish.css";

export type Props = {
  score: number;
};

const Finish = ({ score }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="finish">
      <p className="finish__title">Game finished</p>
      <p className="finish__score">Score: {score} points</p>
      <Button
        className="finish__button-submit button__end"
        onClick={() => navigate("/")}
        text="Play again"
      />
    </div>
  );
};

export default Finish;
