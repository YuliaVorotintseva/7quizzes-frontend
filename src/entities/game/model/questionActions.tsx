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
  () => async (dispatch: Dispatch<GetQuestionAction>) => {
    dispatch({
      type: GET_QUESTION_FETCH,
    });

    try {
      const firstQuestionId = await getFirstQuestionId();
      const firstQuestion = await getQuestion(firstQuestionId);

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
  (nextQuestionId: string) => async (dispatch: Dispatch<GetQuestionAction>) => {
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
  (questionId: string, selectedAnswerId: string) =>
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
