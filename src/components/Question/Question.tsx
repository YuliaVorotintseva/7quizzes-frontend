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
        <input
          type="radio"
          name="answers"
          id={answer.id}
          value={answer.id}
          className="radio radio__question"
        />
        <label className="radio__button" key={answer.id} htmlFor={answer.id}>
          {answer.text}
        </label>
      </>
    );
  });

  return (
    <div className="question">
      <div className="question__header">
        <p className="question__header-title question__content">
          Question {props.questionNumber}
        </p>
        <p className="question__header-content question__total-score question__content">
          Points: {props.score}
        </p>
      </div>
      <div className="question__description">
        <p className="question__description-content question__content">
          {props.text}
        </p>
      </div>
      <form action="" method="post" className="form__question">
        {answers}
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
