import React from "react";

import Button from "../Button/Button";

import "./finish.css";

export type Props = {
  score: number;
};

const Finish = ({ score }: Props) => (
  <div className="finish">
    <p className="finish__title">Game finished</p>
    <p className="finish__score">Score: {score} points</p>
    <Button
      className="finish__button-submit button__end"
      onClick={() => {}}
      text="Play again"
    />
  </div>
);

export default Finish;
