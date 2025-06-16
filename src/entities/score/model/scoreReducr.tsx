import {
  GetTotalScoreState,
  TotalScoreActionTypes,
  INCREMENT_TOTAL_SCORE,
  RESET_TOTAL_SCORE,
} from "./actionTypes";

const initialState: GetTotalScoreState = {
  score: 0,
};

export const totalScoreReducer = (
  state = initialState,
  action: TotalScoreActionTypes,
): GetTotalScoreState => {
  switch (action.type) {
    case INCREMENT_TOTAL_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case RESET_TOTAL_SCORE:
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
};
