import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Question from "../../entities/game/ui/Question";
import Loader from "../../components/Loader/Loader";
import { AppDispatch, RootState } from "../../app/storeTypes";
import {
  useGetFirstQuestionIdMutation,
  useGetQuestionQuery,
} from "../../entities/game/api/QuestionAPI";

const Game = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, question, nextQuestionId } = useSelector(
    (state: RootState) => state.questionReducer,
  );
  const { currentRoomId } = useSelector(
    (state: RootState) => state.currentRoomId,
  );

  const [questionNumber, setQuestionNumber] = useState(1);
  const [goToNextQuestion, setGoToNextQuestion] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(useGetFirstQuestionIdMutation(currentRoomId));
  }, [dispatch]);

  useEffect(() => {
    if (!selectedAnswerId) return;
    dispatch(
      getCorrectAnswerOfCurrentQuestion(
        currentRoomId,
        question.id,
        selectedAnswerId,
      ),
    );
  }, [dispatch, selectedAnswerId]);

  useEffect(() => {
    if (!goToNextQuestion || !nextQuestionId) return;

    dispatch(useGetQuestionQuery(currentRoomId, nextQuestionId));

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
            selectedAnswerId={selectedAnswerId}
            questionNumber={questionNumber}
            setSelectedAnswerId={setSelectedAnswerId}
            setGoToNextQuestion={setGoToNextQuestion}
          />
        </GameLayout>
      )}
    </>
  );
};

export default Game;
