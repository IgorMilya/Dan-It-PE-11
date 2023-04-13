import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

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
        url: "/products/categories",
      }),
    }),

  }),
})

export const {useGetProductsQuery} = productsAPI;
export const {useGetCategoriesQuery} = productsAPI;
