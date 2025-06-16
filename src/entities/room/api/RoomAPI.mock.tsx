import data from "public/RoomAPIData.json";

export const getAllRooms = async () => data;

export const createRoom = async (playerId: string, roomName: string) => {
  return {
    roomId: Math.random().toString(100),
    roomName: roomName,
    players: [{ playerId: playerId }],
  };
};

export const getRoomById = async (roomId: string) => {
  return data.find((room) => room.roomId === roomId);
};
