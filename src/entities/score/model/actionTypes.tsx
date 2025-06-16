export const GET_TOTAL_SCORE = "GET_TOTAL_SCORE";
export const INCREMENT_TOTAL_SCORE = "INCREMENT_TOTAL_SCORE";
export const RESET_TOTAL_SCORE = "RESET_TOTAL_SCORE";

export interface GetTotalScoreState {
  score: number;
}

export interface IncrementTotalScoreAction {
  type: typeof INCREMENT_TOTAL_SCORE;
}

export interface ResetTotalScoreAction {
  type: typeof RESET_TOTAL_SCORE;
}

export type TotalScoreActionTypes =
  | IncrementTotalScoreAction
  | ResetTotalScoreAction;
