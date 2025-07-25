import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";

import { rulesReducer } from "../entities/rules/model/rulesReducer";
import { questionReducer } from "../entities/game/model/questionReducer";
import { totalScoreReducer } from "../entities/score/model/scoreReducr";
import { roomReducer } from "../entities/room/model/roomReducer";
import { currentRoomIdReducer } from "../entities/currentRoomId/model/currentRoomIdReducer";
import { userReducer } from "../entities/user/model/userReducer";

export const rootReducer = combineReducers({
  rulesReducer,
  questionReducer,
  totalScoreReducer,
  roomReducer,
  currentRoomIdReducer,
  userReducer,
});

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;
