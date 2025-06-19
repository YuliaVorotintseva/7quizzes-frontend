import data from "../../../../public/RoomAPIData.json";
import { Room } from "../model/actionTypes";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

export const getAllRooms = async () => {
  let rooms: Array<Room>;
  if (isMocked) {
    rooms = data.map(
      (room) => new Room({ id: room.roomId, name: room.roomName }),
    );
  } else {
    rooms = await fetch("http://localhost:8080/rooms", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  }
  return rooms;
};

export const createNewRoom = async (playerId: string, roomName: string) => {
  if (isMocked) {
    return new Room({ id: Math.random().toString(100), name: roomName });
  }
  const room = await fetch("http://localhost:8080/rooms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      playerId,
      roomName,
    }),
  }).then((response) => response.json());
  return new Room(room);
};

export const getRoomDataById = async (roomId: string) => {
  if (isMocked) {
    const room = data.find((room) => room.roomId === roomId);
    if (room) {
      return new Room({
        id: room.roomId,
        name: room.roomName,
        players: room.players,
      });
    }
    return null;
  }
  const room = await fetch(`http://localhost:8080/rooms/${roomId}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
  return new Room(room);
};
