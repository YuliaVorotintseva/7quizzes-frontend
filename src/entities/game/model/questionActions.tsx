import { Dispatch } from "redux";

import IAnswerRequest from "../../../interfaces/IAnswerRequest";
import Answer from "../../../interfaces/Answer";
import {
  getCorrectAnswerOfQuestion,
  getQuestionById,
  startGame,
} from "../api/GameAPI.mock";
import {
  CorrectAnswerOfQuestion,
  GET_CORRECT_ANSWER,
  GET_QUESTION_ERROR,
  GET_QUESTION_FETCH,
  GET_QUESTION_SUCCESS,
  GetQuestionAction,
  QuestionRequest,
} from "./actionTypes";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";
const currentRoomId = "room1";
const userId = "user1";

const getQuestion = async (questionId: string) => {
  let question;
  if (isMocked) {
    question = await getQuestionById(questionId);
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

const submitAnswer = async (questionId: string, selectedAnswerId: string) => {
  let response;
  if (isMocked) {
    response = await getCorrectAnswerOfQuestion(questionId);
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

export const getFirstQuestionAction =
  () => async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      let response;
      if (isMocked) {
        response = await startGame();
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

      const firstQuestion = await getQuestion(response.questionId);

      dispatch({
        type: GET_QUESTION_SUCCESS,
        question: firstQuestion,
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_QUESTION_ERROR,
      });
    }
  };

export const getNextQuestionAction =
  (nextQuestionId: string | null | undefined) =>
  async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      if (nextQuestionId) {
        const nextQuestion = await getQuestion(nextQuestionId);

        dispatch({
          type: GET_QUESTION_SUCCESS,
          question: nextQuestion,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_QUESTION_ERROR,
      });
    }
  };

export const getCorrectAnswerOfCurrentQuestion =
  (
    questionId: string | null | undefined,
    selectedAnswerId: string | undefined,
  ) =>
  async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      if (questionId && selectedAnswerId) {
        const response = await submitAnswer(questionId, selectedAnswerId);

        dispatch({
          type: GET_CORRECT_ANSWER,
          nextQuestionId: response.nextQuestionId,
          correctAnswerId: response.correctAnswerId,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_QUESTION_ERROR,
      });
    }
  };
