import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bd-book-backend-lrd25cxt4-arifulislamshuvo.vercel.app/",
  }),
  tagTypes: ["books"],

  endpoints: () => ({}),
});
