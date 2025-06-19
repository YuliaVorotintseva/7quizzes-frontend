export const GET_ALL_ROOMS_FETCH = "GET_ALL_ROOMS_FETCH";
export const GET_ALL_ROOMS_SUCCESS = "GET_ALL_ROOMS_SUCCESS";
export const GET_ALL_ROOMS_ERROR = "GET_ALL_ROOMS_ERROR";

export const CREATE_ROOM_FETCH = "CREATE_ROOM_FETCH";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_ERROR = "CREATE_ROOM_ERROR";

export const GET_ROOM_FETCH = "GET_ROOM_FETCH";
export const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
export const GET_ROOM_ERROR = "GET_ROOM_ERROR";

export interface IUser {
  playerId: string;
}

export interface IRoom {
  id: string;
  name: string;
  players?: IUser[];
}

export class Room implements IRoom {
  id: string;
  name: string;
  players?: IUser[];

  constructor({ id, name, players }: IRoom) {
    this.id = id;
    this.name = name;
    this.players = players !== null ? players : [];
  }
}

export interface RoomState {
  rooms?: Room[];
  room?: Room;
  isLoading: boolean;
}

export interface GetRoomsState extends RoomState {
  rooms: Room[];
  isLoading: boolean;
}

export interface CreateRoomState extends RoomState {
  room: Room;
  isLoading: boolean;
}

export interface RoomsAction {
  type: string;
  rooms?: Room[];
  room?: Room;
}

export interface GetRoomsInfoAction extends RoomsAction {
  type: typeof GET_ALL_ROOMS_FETCH | typeof GET_ALL_ROOMS_ERROR;
}

export interface GetRoomsSuccessAction extends RoomsAction {
  type: typeof GET_ALL_ROOMS_SUCCESS;
  rooms: Room[];
}

export interface CreateRoomInfoAction extends RoomsAction {
  type: typeof CREATE_ROOM_FETCH | typeof CREATE_ROOM_ERROR;
}

export interface CreateRoomSuccessAction extends RoomsAction {
  type: typeof CREATE_ROOM_SUCCESS;
  room: Room;
}
