import data from "../../../../public/RoomAPIData.json";
import { Response, Room } from "../model/actionTypes";
import { fetchGET, fetchPOST } from "../../../shared/api/fetcher";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

export const getAllRooms = async () => {
  let rooms: Array<Room>;
  if (isMocked) {
    rooms = data.map(
      (room) => new Room({ id: room.roomId, name: room.roomName }),
    );
  } else {
    const result: Response = await fetchGET("rooms");

    rooms = result.rooms.map(
      (room) => new Room({ id: room.roomId, name: room.roomName }),
    );
  }
  return rooms;
};

export const createNewRoom = async (roomName: string) => {
  if (isMocked) {
    return new Room({ id: Math.random().toString(100), name: roomName });
  }

  const room = await fetchPOST(
    "rooms",
    JSON.stringify({
      roomName: roomName,
    }),
  );
  return new Room({ id: room.roomId, name: room.roomName });
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

  const room = await fetchGET(`rooms/${roomId}`);
  return new Room({ id: room.roomId, name: room.roomName });
};
