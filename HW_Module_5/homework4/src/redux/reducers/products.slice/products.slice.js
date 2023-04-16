import {API} from "../../../services/API"

export const productAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
  })
})

export const {useGetProductsQuery} = productAPI