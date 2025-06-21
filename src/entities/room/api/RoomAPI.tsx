import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IUser, Room } from "../model/actionTypes";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

export const roomAPI = createApi({
  reducerPath: "roomAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Room"],
  endpoints: (builder) => ({
    getAllRooms: builder.query<Room[], void>({
      query: () => ({
        url: "rooms",
        method: "GET",
      }),
      transformResponse: (response: {
        rooms?: Array<{ roomId: string; roomName: string }>;
      }) => {
        const roomsData = response?.rooms || [];
        return roomsData.map(
          (room) => new Room({ id: room.roomId, name: room.roomName }),
        );
      },
    }),
    createRoom: builder.mutation<Room, { playerId: string; roomName: string }>({
      query: ({ playerId, roomName }) => {
        if (isMocked) {
          return {
            url: "",
            method: "POST",
            responseHandler: () =>
              Promise.resolve({
                roomId: Math.random().toString(36).substring(2, 9),
                roomName,
              }),
          };
        }
        return {
          url: "rooms",
          method: "POST",
          body: { playerId, roomName },
        };
      },
      transformResponse: (response: { roomId: string; roomName: string }) =>
        new Room({ id: response.roomId, name: response.roomName }),
      invalidatesTags: ["Room"],
    }),
    getRoomById: builder.query<Room | null, string>({
      query: (roomId) => `rooms/${roomId}`,
      transformResponse: (
        response: {
          roomId: string;
          roomName: string;
          players?: IUser[];
        } | null,
      ) => {
        if (!response) return null;
        return new Room({
          id: response.roomId,
          name: response.roomName,
          players: response.players || [],
        });
      },
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useCreateRoomMutation,
  useGetRoomByIdQuery,
} = roomAPI;
