import Answer from "../../../interfaces/Answer";

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
  question: QuestionData | null | undefined;
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

export type GetFirstQuestionType = {
  currentRoomId: string | null;
};

export type GetNextQuestionType = {
  currentRoomId: string;
  nextQuestionId: string;
};

export type GetCorrectAnswerOfCurrentQuestionType = {
  currentRoomId: string;
  questionId: string;
  selectedAnswerId: string;
};
