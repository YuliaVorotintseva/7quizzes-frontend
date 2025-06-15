import { GET_RULES, GetRulesState, GetRulesAction } from "./actionTypes";

const initialState: GetRulesState = {
  rules: [],
  isLoading: true,
};

export const rulesReducer = (
  state = initialState,
  action: GetRulesAction,
): GetRulesState => {
  switch (action.type) {
    case GET_RULES:
      return {
        ...state,
        rules: action.rules || state.rules,
        isLoading: action.rules.length == 0,
      };
    default:
      return state;
  }
};
