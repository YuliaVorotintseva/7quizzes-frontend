import Answer from "../../../interfaces/Answer";

export const GET_QUESTION_FETCH = "GET_QUESTION_FETCH";
export const GET_CORRECT_ANSWER = "GET_CORRECT_ANSWER";
export const GET_QUESTION_SUCCESS = "GET_QUESTION_SUCCESS";
export const GET_QUESTION_ERROR = "GET_QUESTION_ERROR";

export interface QuestionData {
  id?: string;
  answers?: Array<Answer>;
  number?: number;
  text?: string;
  nextQuestionId?: string;
  correctAnswerId?: string;
}

export interface IQuestionRequest extends QuestionData {
  id?: string;
  answers?: Array<Answer>;
  number?: number;
  text?: string;
}

export class QuestionRequest implements IQuestionRequest {
  id: string;
  answers: Array<Answer>;
  number: number;
  text: string;

  constructor(params: IQuestionRequest) {
    this.id = params.id || "";
    this.answers = params.answers || [];
    this.number = params.number || 1;
    this.text = params.text || "";
  }
}

export interface ICorrectAnswerOfQuestion extends QuestionData {
  nextQuestionId: string;
  correctAnswerId: string;
}

export class CorrectAnswerOfQuestion implements QuestionData {
  nextQuestionId: string;
  correctAnswerId: string;

  constructor(params: ICorrectAnswerOfQuestion) {
    this.correctAnswerId = params.correctAnswerId;
    this.nextQuestionId = params.nextQuestionId;
  }
}

export interface GetQuestionState {
  question: QuestionData;
  isLoading: boolean;
  nextQuestionId: string | null;
  correctAnswerId: string | null;
}

export interface GetQuestionAction {
  type: string;
  question?: QuestionData;
  nextQuestionId?: string | null;
  correctAnswerId?: string | null;
}

export interface GetQuestionActionFetch extends GetQuestionAction {
  type: typeof GET_QUESTION_FETCH;
}

export interface GetQuestionActionSuccess extends GetQuestionAction {
  type: typeof GET_QUESTION_SUCCESS;
  question: QuestionData;
  nextQuestionId: string | null;
  correctAnswerId: string | null;
}

export interface GetQuestionActionError extends GetQuestionAction {
  type: typeof GET_QUESTION_ERROR;
}
