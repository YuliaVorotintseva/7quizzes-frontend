import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentRoomIdState } from "./actionTypes";

const initialState: CurrentRoomIdState = {
  currentRoomId: null,
};

const currentRoomIdSlice = createSlice({
  name: "currentRoomId",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.currentRoomId = action.payload;
    },
    clear: (state) => {
      state.currentRoomId = null;
    },
  },
});

export const { set: setCurrentRoomId, clear: clearCurrentRoomId } =
  currentRoomIdSlice.actions;

export const selectCurrentRoomId = (state: CurrentRoomIdState) =>
  state.currentRoomId;

export default currentRoomIdSlice.reducer;
