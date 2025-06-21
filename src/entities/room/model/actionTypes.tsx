export interface IUser {
  playerId: string;
}

export interface IResponseRoom {
  roomId: string;
  roomName: string;
  players?: IUser[];
}

export class ResponseRoom {
  roomId: string;
  roomName: string;
  players?: IUser[];

  constructor({ roomId, roomName, players }: IResponseRoom) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.players = players !== null ? players : [];
  }
}

export type Response = {
  rooms: ResponseRoom[];
};

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
  rooms: Room[];
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
