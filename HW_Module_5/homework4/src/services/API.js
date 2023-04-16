import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
  keepUnusedDataFor: 600,
  endpoints: () => ({}),
})
