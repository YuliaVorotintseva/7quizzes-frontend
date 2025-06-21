import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import currentRoomIdReducer from "../entities/currentRoomId/model/currentRoomIdReducer";
import scoreReducer from "../entities/score/model/scoreReducer";
import { questionAPI } from "../entities/game/api/QuestionAPI";
import { roomAPI } from "../entities/room/api/RoomAPI";
import { rulesAPI } from "../entities/rules/api/RulesAPI";

const store = configureStore({
  reducer: {
    [roomAPI.reducerPath]: roomAPI.reducer,
    [questionAPI.reducerPath]: questionAPI.reducer,
    [rulesAPI.reducerPath]: rulesAPI.reducer,
    currentRoomId: currentRoomIdReducer,
    score: scoreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
