import { ThunkDispatch, ThunkAction } from "redux-thunk";

import {
  GetRulesAction,
  GetRulesState,
} from "../entities/rules/model/actionTypes";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  GetRulesAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, GetRulesAction>;

export type RootState = { rulesReducer: GetRulesState };
