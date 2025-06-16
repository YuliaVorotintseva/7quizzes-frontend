import {
  GET_CORRECT_ANSWER,
  GET_QUESTION_ERROR,
  GET_QUESTION_FETCH,
  GET_QUESTION_SUCCESS,
  GetQuestionAction,
} from "./actionTypes";

const initialState = {
  question: null,
  isLoading: true,
  nextQuestionId: null,
  correctAnswerId: null,
};

export const questionReducer = (
  state = initialState,
  action: GetQuestionAction,
) => {
  switch (action.type) {
    case GET_QUESTION_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CORRECT_ANSWER:
      return {
        ...state,
        isLoading: false,
        nextQuestionId: action.nextQuestionId || null,
        correctAnswerId: action.correctAnswerId || null,
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.question ? { ...action.question } : state.question,
        isLoading: false,
      };
    case GET_QUESTION_ERROR:
      return {
        ...state,
        isLoading: false,
        question: null,
      };
    default:
      return state;
  }
};
