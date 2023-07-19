import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: () => ({}),
});
