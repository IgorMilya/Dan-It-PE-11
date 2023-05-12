import {API} from "../../services/API";

export const productAPI = API.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query({
      query: () => ({
        url: "/product",
      }),
      providesTags: ['product']
    }),
  })
})

export const {useGetProductQuery} = productAPI;