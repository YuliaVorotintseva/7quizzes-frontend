import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../components/Question/Question";
import Loader from "../../components/Loader/Loader";
import { useTotalScore } from "../../utils/useTotalScore";
import { AppDispatch, RootState } from "../../app/storeTypes";
import {
  getCorrectAnswerOfCurrentQuestion,
  getFirstQuestionAction,
  getNextQuestionAction,
} from "../../entities/game/model/questionActions";

const Game = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { question, isLoading, nextQuestionId, correctAnswerId } = useSelector(
    (state: RootState) => state.questionReducer,
  );

  const [questionNumber, setQuestionNumber] = useState(1);
  const [goToNextQuestion, setGoToNextQuestion] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<
    string | null | undefined
  >(null);
  const { totalScore, setTotalScore } = useTotalScore();

  useEffect(() => {
    dispatch(getFirstQuestionAction());
  }, [dispatch]);

  useEffect(() => {
    if (!selectedAnswerId) return;

    dispatch(getCorrectAnswerOfCurrentQuestion(question.id, selectedAnswerId));

    setTotalScore(
      selectedAnswerId === correctAnswerId ? totalScore + 1 : totalScore,
    );
  }, [dispatch, correctAnswerId, selectedAnswerId]);

  useEffect(() => {
    if (!goToNextQuestion || !nextQuestionId) return;

    dispatch(getNextQuestionAction(nextQuestionId));

    setSelectedAnswerId(null);
    setGoToNextQuestion(false);
    setQuestionNumber(questionNumber + 1);
  }, [dispatch, goToNextQuestion, nextQuestionId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GameLayout>
          <Question
            answers={question.answers}
            correctAnswerId={correctAnswerId}
            selectedAnswerId={selectedAnswerId}
            nextQuestionId={nextQuestionId}
            questionNumber={questionNumber}
            score={totalScore}
            text={question.text}
            setSelectedAnswerId={setSelectedAnswerId}
            setGoToNextQuestion={setGoToNextQuestion}
          />
        </GameLayout>
      )}
    </>
  );
};

export default Game;
