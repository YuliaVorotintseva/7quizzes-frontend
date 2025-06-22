import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../components/Button/Button";
import AnswerComponent from "../../../components/AnswerComponent/AnswerComponent";
import Answer from "../../../interfaces/Answer";
import { increment } from "../../../entities/score/model/scoreReducer";
import { AppDispatch, RootState } from "../../../app/storeTypes";

import "./question.css";
import {
  useGetQuestionQuery,
  useSubmitAnswerMutation,
} from "../api/QuestionAPI";

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
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { score } = useSelector((state: RootState) => state.score);
  const { currentRoomId } = useSelector(
    (state: RootState) => state.currentRoomId,
  );
  const { data: answerResult } = useSubmitAnswerMutation();
  const { data: question } = useGetQuestionQuery(
    { currentRoomId, questionId },
    { skip: !questionId },
  );

  useEffect(() => {
    if (
      selectedAnswerId !== null &&
      selectedAnswerId === answerResult?.correctAnswerId
    ) {
      dispatch(increment());
    }
  }, [answerResult?.correctAnswerId]);

  const answers = question.answers?.map((answer: Answer) => {
    return (
      <AnswerComponent
        id={answer.id}
        text={answer.text}
        key={answer.id}
        isCorrect={answer.id === answerResult?.correctAnswerId}
        isSelected={answer.id === selectedAnswerId}
        isDisabled={selectedAnswerId !== null}
        selectAnswer={setSelectedAnswerId}
      />
    );
  });

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
          disabled={
            selectedAnswerId === null || answerResult?.correctAnswerId === null
          }
          className={"submit__answer"}
          onClick={
            answerResult?.nextQuestionId !== null
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
