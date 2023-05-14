import {API} from "../../services/API";
import {IProducts} from "../../types/IProducts";

export const productAPI = API.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query<IProducts[], null>({
      query: () => ({
        url: "/products",
      }),
      providesTags: ['product']
    }),
  })
})

export const {useGetProductQuery} = productAPI;