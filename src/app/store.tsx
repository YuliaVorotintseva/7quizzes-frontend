import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";

import { GET_RULES, GetRulesAction, GetRulesState } from "./types";

const initialState: GetRulesState = {
  rules: [],
  isLoading: true,
};

const rulesReducer = (
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

const rootReducer = combineReducers({
  rules: rulesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  GetRulesAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, GetRulesAction>;

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;
