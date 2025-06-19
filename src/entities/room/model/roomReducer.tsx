import {
  CREATE_ROOM_ERROR,
  CREATE_ROOM_FETCH,
  CREATE_ROOM_SUCCESS,
  GET_ALL_ROOMS_ERROR,
  GET_ALL_ROOMS_FETCH,
  GET_ALL_ROOMS_SUCCESS,
  GET_ROOM_ERROR,
  GET_ROOM_FETCH,
  GET_ROOM_SUCCESS,
  RoomsAction,
  RoomState,
} from "./actionTypes";

const initialState: RoomState = {
  rooms: [],
  isLoading: true,
};

export const roomReducer = (state = initialState, action: RoomsAction) => {
  switch (action.type) {
    case GET_ALL_ROOMS_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.rooms,
        isLoading: false,
      };
    case GET_ALL_ROOMS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_ROOM_FETCH || GET_ROOM_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ROOM_SUCCESS || GET_ROOM_SUCCESS:
      return {
        ...state,
        room: action.room,
        isLoading: false,
      };
    case CREATE_ROOM_ERROR || GET_ROOM_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
