import React from "react";

import Button from "../Button/Button";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
import Answer from "../../interfaces/Answer";

import "./question.css";
import { useNavigate } from "react-router-dom";

export type Props = {
  answers: Array<Answer>;
  correctAnswerId: string | null;
  selectedAnswerId: string | null;
  questionNumber: number;
  score: number;
  text: string;
  setSelectedAnswerId: (id: string) => void;
  setGoToNextQuestion: (goToNextQuestion: boolean) => void;
};

const Question = (props: Props) => {
  const navigate = useNavigate();
  const answers = props.answers.map((answer: Answer, key) => {
    return (
      <AnswerComponent
        id={answer.id}
        text={answer.text}
        key={key}
        isCorrect={answer.id === props.correctAnswerId}
        isSelected={answer.id === props.selectedAnswerId}
        isDisabled={props.selectedAnswerId !== null}
        selectAnswer={props.setSelectedAnswerId}
      />
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
      <form
        onSubmit={(event) => event.preventDefault()}
        className="form__question"
      >
        {answers}
        <Button
          disabled={
            props.selectedAnswerId === null || props.correctAnswerId === null
          }
          className={"submit__answer"}
          onClick={
            props.questionNumber < 4
              ? () => props.setGoToNextQuestion(true)
              : () => navigate("/finish")
          }
          text="answer"
        />
      </form>
    </div>
  );
};

export default Question;
