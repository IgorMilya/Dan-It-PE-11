import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      // providesTags: result => ['Products']
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
      }),
      // invalidatesTags: ['Products']
    }),
  }),
})



export const {useGetProductsQuery, useGetCategoriesQuery} = productsAPI