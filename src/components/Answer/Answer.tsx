import React from "react";

import "./answer.css";

export type AnswerProps = {
  id: string;
  text: string;
};

const Answer = ({ id, text }: AnswerProps) => (
  <label className="answer" htmlFor={id} key={id}>
    <input
      type="radio"
      name="answer"
      id={id}
      value={id}
      className="answer__radio"
    />
    {text}
  </label>
);

export default Answer;
