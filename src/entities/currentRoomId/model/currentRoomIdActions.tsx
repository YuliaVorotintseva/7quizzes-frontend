import { Dispatch } from "redux";
import {
  GET_CURRENT_ROOM_ID,
  GetCurrentRoomIdAction,
  SET_CURRENT_ROOM_ID,
  SetCurrentRoomIdAction,
} from "./actionTypes";

export const setCurrentRoomId =
  (currentRoomId: string) => (dispatch: Dispatch<SetCurrentRoomIdAction>) =>
    dispatch({
      type: SET_CURRENT_ROOM_ID,
      currentRoomId: currentRoomId,
    });

export const getCurrentRoomId =
  () => (dispatch: Dispatch<GetCurrentRoomIdAction>) =>
    dispatch({
      type: GET_CURRENT_ROOM_ID,
    });
