import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../components/Button/Button";
import AnswerComponent from "../../../components/AnswerComponent/AnswerComponent";
import Answer from "../../../interfaces/Answer";
import { AppDispatch, RootState } from "../../../app/storeTypes";
import { incrementTotalScore } from "../../../entities/score/model/scoreActions";

import "./question.css";

export type Props = {
  selectedAnswerId: string | null;
  questionNumber: number;
  setSelectedAnswerId: (id: string) => void;
  setGoToNextQuestion: (goToNextQuestion: boolean) => void;
};

const Question = ({
  selectedAnswerId,
  questionNumber,
  setSelectedAnswerId,
  setGoToNextQuestion,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { question, nextQuestionId, correctAnswerId } = useSelector(
    (state: RootState) => state.questionReducer,
  );
  const { score } = useSelector((state: RootState) => state.totalScoreReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedAnswerId !== null && selectedAnswerId === correctAnswerId) {
      dispatch(incrementTotalScore());
    }
  }, [correctAnswerId]);

  const answers = question.answers?.map((answer: Answer, key) => (
    <AnswerComponent
      id={answer.id}
      text={answer.text}
      key={key}
      isCorrect={answer.id === correctAnswerId}
      isSelected={answer.id === selectedAnswerId}
      isDisabled={selectedAnswerId !== null}
      selectAnswer={setSelectedAnswerId}
    />
  ));

  return (
    <div className="question">
      <div className="question__header">
        <p className="question__header-title question__content">
          Question {questionNumber}
        </p>
        <p className="question__header-content question__total-score question__content">
          Points: {score}
        </p>
      </div>
      <div className="question__description">
        <p className="question__description-content question__content">
          {question.text}
        </p>
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="form__question"
      >
        {answers}
        <Button
          disabled={selectedAnswerId === null || correctAnswerId === null}
          className={"submit__answer"}
          onClick={
            nextQuestionId !== null
              ? () => setGoToNextQuestion(true)
              : () => navigate("/finish")
          }
          text="answer"
        />
      </form>
    </div>
  );
};

export default Question;
