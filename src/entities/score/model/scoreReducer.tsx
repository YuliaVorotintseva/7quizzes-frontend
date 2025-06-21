import { createSlice } from "@reduxjs/toolkit";

import { GetTotalScoreState } from "./actionTypes";

const initialState: GetTotalScoreState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment(state) {
      state.score += 1;
    },
    reset(state) {
      state.score = 0;
    },
  },
});

export const { increment, reset } = scoreSlice.actions;

export default scoreSlice.reducer;
