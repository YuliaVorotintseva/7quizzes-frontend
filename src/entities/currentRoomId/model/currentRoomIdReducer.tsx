import {
  CurrentRoomIdState,
  CurrentRoomIdAction,
  SET_CURRENT_ROOM_ID,
  GET_CURRENT_ROOM_ID,
} from "./actionTypes";

const initialState: CurrentRoomIdState = {
  currentRoomId: null,
};

export const currentRoomIdReducer = (
  state = initialState,
  action: CurrentRoomIdAction,
): CurrentRoomIdState => {
  switch (action.type) {
    case SET_CURRENT_ROOM_ID:
      return {
        ...state,
        currentRoomId: action.currentRoomId || null,
      };
    case GET_CURRENT_ROOM_ID:
      return state;
    default:
      return state;
  }
};
