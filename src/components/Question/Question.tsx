import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import IAnswer from "../../interfaces/Answer";
import Answer from "../Answer/Answer";

import "./question.css";

export type Props = {
  answers: Array<IAnswer>;
  questionNumber: number;
  score: number;
  text: string;
};

const Question = (props: Props) => {
  const navigate = useNavigate();

  const answers = props.answers.map((answer: IAnswer, key) => (
    <Answer id={answer.id} text={answer.text} key={key} />
  ));

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
          onClick={() => navigate("/finish")}
          text="answer"
        />
      </form>
    </div>
  );
};

export default Question;
