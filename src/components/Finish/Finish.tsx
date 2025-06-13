import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import { useTotalScore } from "../../utils/useTotalScore";

import "./finish.css";

const Finish = () => {
  const { totalScore, setTotalScore } = useTotalScore();
  const navigate = useNavigate();

  return (
    <div className="finish">
      <p className="finish__title">Game finished</p>
      <p className="finish__score">Score: {totalScore} points</p>
      <Button
        className="finish__button-submit button__end"
        onClick={() => {
          setTotalScore(0);
          navigate("/game");
        }}
        text="Play again"
      />
    </div>
  );
};

export default Finish;
