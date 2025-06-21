import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rulesAPI = createApi({
  reducerPath: "rulesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Rules"],
  endpoints: (builder) => ({
    getRulesData: builder.query<string[], void>({
      query: () => "rules",
      transformResponse: (response: { rules?: string[] }) =>
        response.rules || [],
    }),
  }),
});

export const { useGetRulesDataQuery } = rulesAPI;
