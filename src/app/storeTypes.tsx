import { ThunkDispatch, ThunkAction } from "redux-thunk";

import {
  GetRulesAction,
  GetRulesState,
} from "../entities/rules/model/actionTypes";
import { GetQuestionState } from "../entities/game/model/actionTypes";
import { GetTotalScoreState } from "../entities/score/model/actionTypes";
import { RoomState } from "../entities/room/model/actionTypes";
import { CurrentRoomIdState } from "../entities/currentRoomId/model/actionTypes";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  GetRulesAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, GetRulesAction>;

export type RootState = {
  rulesReducer: GetRulesState;
  questionReducer: GetQuestionState;
  totalScoreReducer: GetTotalScoreState;
  roomReducer: RoomState;
  currentRoomIdReducer: CurrentRoomIdState;
};
