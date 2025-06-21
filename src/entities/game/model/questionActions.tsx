import { Dispatch } from "redux";

import {
  GET_CORRECT_ANSWER,
  GET_QUESTION_ERROR,
  GET_QUESTION_FETCH,
  GET_QUESTION_SUCCESS,
  GetQuestionAction,
} from "./actionTypes";
import {
  getFirstQuestionId,
  getQuestion,
  submitAnswer,
} from "../api/GameAPI.mock";

export const getFirstQuestionAction =
  (currentRoomId: string | null) =>
  async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      if (!currentRoomId) return;
      const firstQuestionId = await getFirstQuestionId(currentRoomId);
      const firstQuestion = await getQuestion(currentRoomId, firstQuestionId);

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
  (currentRoomId: string | null, nextQuestionId: string) =>
  async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      if (nextQuestionId) {
        if (!currentRoomId) return;
        const nextQuestion = await getQuestion(currentRoomId, nextQuestionId);

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
    currentRoomId: string | null,
    questionId: string | undefined,
    selectedAnswerId: string | null,
  ) =>
  async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      if (questionId && selectedAnswerId && currentRoomId) {
        const response = await submitAnswer(
          currentRoomId,
          questionId,
          selectedAnswerId,
        );

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
