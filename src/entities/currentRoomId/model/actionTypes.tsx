export const SET_CURRENT_ROOM_ID = "SET_CURRENT_ROOM_ID";
export const GET_CURRENT_ROOM_ID = "GET_CURRENT_ROOM_ID";

export interface CurrentRoomIdState {
  currentRoomId: string | null;
}

export interface CurrentRoomIdAction {
  type: string;
  currentRoomId?: string;
}

export interface SetCurrentRoomIdAction extends CurrentRoomIdAction {
  type: typeof SET_CURRENT_ROOM_ID;
}

export interface GetCurrentRoomIdAction extends CurrentRoomIdAction {
  type: typeof GET_CURRENT_ROOM_ID;
}
