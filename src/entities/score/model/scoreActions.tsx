import { Dispatch } from "redux";

import {
  INCREMENT_TOTAL_SCORE,
  IncrementTotalScoreAction,
  RESET_TOTAL_SCORE,
  ResetTotalScoreAction,
} from "./actionTypes";

export const incrementTotalScore =
  () => (dispatch: Dispatch<IncrementTotalScoreAction>) =>
    dispatch({
      type: INCREMENT_TOTAL_SCORE,
    });

export const resetTotalScore =
  () => (dispatch: Dispatch<ResetTotalScoreAction>) =>
    dispatch({
      type: RESET_TOTAL_SCORE,
    });
