import React from "react";

import "./answerComponent.css";

export type AnswerProps = {
  id: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  selectAnswer: (id: string) => void;
};

const AnswerComponent = ({
  id,
  text,
  isCorrect,
  isSelected,
  isDisabled,
  selectAnswer,
}: AnswerProps) => {
  const getClassName = () => {
    if (isSelected) {
      return isCorrect ? "answer correct" : "answer incorrect";
    }
    if (isDisabled && isCorrect) {
      return "answer correct";
    }
    return "answer";
  };

  const getIcon = () => {
    if (isSelected) {
      return isCorrect ? (
        <img className="answer__img" src="/correct.png" />
      ) : (
        <img className="answer__img" src="/incorrect.png" />
      );
    }
    if (isDisabled && isCorrect) {
      return <img className="answer__img" src="/correct.png" />;
    }
  };

  return (
    <label className={getClassName()} htmlFor={id} key={id}>
      <input
        type="radio"
        name="answer"
        id={id}
        value={id}
        className="answer__radio"
        onChange={() => selectAnswer(id)}
        disabled={isDisabled}
        checked={isSelected}
      />
      {text}
      {getIcon()}
    </label>
  );
};

export default AnswerComponent;
