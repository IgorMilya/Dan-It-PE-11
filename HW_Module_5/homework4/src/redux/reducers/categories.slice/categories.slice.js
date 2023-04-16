import {API} from "../../../services/API"

export const categoriesAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories"
      }),
    }),
  })
})

export const {useGetCategoriesQuery} = categoriesAPI