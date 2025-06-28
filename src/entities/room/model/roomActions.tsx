import { Dispatch } from "redux";

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
} from "./actionTypes";
import {
  createNewRoom,
  getAllRooms,
  getRoomDataById,
} from "../api/RoomAPI.mock";

export const getRooms = () => async (dispatch: Dispatch<RoomsAction>) => {
  dispatch({
    type: GET_ALL_ROOMS_FETCH,
  });

  try {
    const rooms = await getAllRooms();

    dispatch({
      type: GET_ALL_ROOMS_SUCCESS,
      rooms: rooms,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_ROOMS_ERROR,
    });
  }
};

export const createRoom =
  (roomName: string) => async (dispatch: Dispatch<RoomsAction>) => {
    dispatch({
      type: CREATE_ROOM_FETCH,
    });

    try {
      const room = await createNewRoom(roomName);

      dispatch({
        type: CREATE_ROOM_SUCCESS,
        room,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CREATE_ROOM_ERROR,
      });
    }
  };

export const getRoomById =
  (roomId: string) => async (dispatch: Dispatch<RoomsAction>) => {
    dispatch({
      type: GET_ROOM_FETCH,
    });

    try {
      const room = await getRoomDataById(roomId);

      if (room) {
        dispatch({
          type: GET_ROOM_SUCCESS,
          room,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ROOM_ERROR,
      });
    }
  };
