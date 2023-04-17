import {API} from "../../../services/API"

export const productAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      transformResponse: (response, meta, arg) => response}),
  })
})

export const {useGetProductsQuery} = productAPI