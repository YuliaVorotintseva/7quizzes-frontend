import React from "react";

import "./finish.css";

import Button from "../Button/Button";

export type Props = {
  score: number;
};

const Finish = ({ score }: Props) => (
  <div className="finish">
    <p className="finish__title">Game finished</p>
    <p className="finish__score">Score: {score} points</p>
    <Button className="button__end" onClick={() => {}} text="Play again" />
  </div>
);

export default Finish;
