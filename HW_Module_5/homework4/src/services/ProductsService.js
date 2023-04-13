import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/products/categories"
      }),
    }),

  }),
})

export const {useGetProductsQuery, useGetCategoriesQuery} = productsAPI