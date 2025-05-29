import React from "react";

import "./question.css";
import Button from "../Button/Button";
import IAnswer from "../../interfaces/Answer";

export type Props = {
  answers: Array<IAnswer>;
  questionNumber: number;
  score: number;
  text: string;
};

const Question = (props: Props) => {
  const answers = props.answers.map((answer: IAnswer) => {
    return (
      <>
        <label className="radio__button" key={answer.id}>
          {answer.text}
        </label>
        <input
          type="radio"
          name="answers"
          value={answer.id}
          className="radio radio__question"
        />
      </>
    );
  });

  return (
    <div className="div__main">
      <div className="div__header">
        <p className="header__question question__content">
          Question {props.questionNumber}
        </p>
        <p className="header__total-score question__content">
          Points: {props.score}
        </p>
      </div>
      <div className="div div__description">
        <p className="header__description question__content">{props.text}</p>
      </div>
      <form action="" className="form">
        <div className="form__answers">{answers}</div>
        <Button
          className="submit__answer"
          onClick={() => alert("Answer is accepted")}
          text="answer"
        />
      </form>
    </div>
  );
};

export default Question;
