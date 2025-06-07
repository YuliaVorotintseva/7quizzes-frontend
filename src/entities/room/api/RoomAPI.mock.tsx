import data from "../mock-data/RoomAPIData.json";

export const getAllRooms = () => data;

export const createRoom = (playerId: string, roomName: string) => {
  return {
    roomId: Math.random().toString(100),
    roomName: roomName,
    players: [{ playerId: playerId }],
  };
};

export const getRoomById = (roomId: string) => {
  return data.find((room) => room.roomId === roomId);
};
