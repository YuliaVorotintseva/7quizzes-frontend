import data from "../../../../public/GameAPIData.json";

import IAnswerRequest from "../../../interfaces/IAnswerRequest";
import Answer from "../../../interfaces/Answer";
import { CorrectAnswerOfQuestion, QuestionRequest } from "../model/actionTypes";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";
const currentRoomId = "room1";
const userId = "user1";
let index = 0;

export const getQuestion = async (questionId: string) => {
  let question;

  if (isMocked) {
    question =
      data.find((question) => question.questionId === questionId) || null;
  } else {
    question = await fetch(
      `http://localhost:8080/rooms/${currentRoomId}/game/question/${questionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    ).then((response) => response.json());
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

export const getFirstQuestionId = async () => {
  let response;

  if (isMocked) {
    response = data[0];
  } else {
    response = await fetch(
      `http://localhost:8080/rooms/${currentRoomId}/game/start`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          playerId: userId,
        }),
      },
    ).then((response) => response.json());
  }

  return response.questionId;
};

export const submitAnswer = async (
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
    response = await fetch(
      `http://localhost:8080/rooms/${currentRoomId}/game/question/${questionId}/answer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          playerId: userId,
          answerId: selectedAnswerId,
        }),
      },
    ).then((response) => response.json());
  }

  return new CorrectAnswerOfQuestion({
    correctAnswerId: response.correctAnswerId,
    nextQuestionId: response.nextQuestionId,
  });
};
