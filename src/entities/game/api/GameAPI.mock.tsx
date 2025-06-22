import data from "../../../../public/GameAPIData.json";

import IAnswerRequest from "../../../interfaces/IAnswerRequest";
import Answer from "../../../interfaces/Answer";
import { CorrectAnswerOfQuestion, QuestionRequest } from "../model/actionTypes";
import { fetchGET, fetchPOST } from "../../../shared/api/fetcher";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";
const playerId = "player1";
let index = 0;

export const getQuestion = async (
  currentRoomId: string,
  questionId: string,
) => {
  let question;

  if (isMocked) {
    question =
      data.find((question) => question.questionId === questionId) || null;
  } else {
    question = await fetchGET(
      `rooms/${currentRoomId}/game/question/${questionId}`,
    );
  }

  const answers: Array<Answer> = question.answersList.map(
    (answer: IAnswerRequest) =>
      new Answer({
        id: answer.answerId,
        text: answer.answerText,
        isCorrect: answer.isCorrect,
        score: answer.questionScore,
      }),
  );

  return new QuestionRequest({
    id: questionId,
    answers: answers,
    number: question.questionNumber,
    text: question.questionText,
  });
};

export const getFirstQuestionId = async (currentRoomId: string) => {
  let response;

  if (isMocked) {
    response = data[0];
  } else {
    response = await fetchPOST(
      `rooms/${currentRoomId}/game/start`,
      JSON.stringify({ playerId: playerId }),
    );
  }

  return response.questionId;
};

export const submitAnswer = async (
  currentRoomId: string,
  questionId: string,
  selectedAnswerId: string,
) => {
  let response;

  if (isMocked) {
    const question =
      data.find((question) => question.questionId === questionId) || null;
    const correctAnswer = question?.answersList.find(
      (answer) => answer.isCorrect === "correct",
    );

    response = {
      correctAnswerId: correctAnswer?.answerId,
      nextQuestionId: index < data.length - 1 ? data[++index].questionId : null,
    };
  } else {
    response = await fetchPOST(
      `rooms/${currentRoomId}/game/question/${questionId}/answer`,
      JSON.stringify({
        playerId: playerId,
        answerId: selectedAnswerId,
      }),
    );
  }

  return new CorrectAnswerOfQuestion({
    correctAnswerId: response.correctAnswerId,
    nextQuestionId: response.nextQuestionId,
  });
};
