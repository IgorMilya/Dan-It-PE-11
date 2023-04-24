import {API} from "../../../services/API"

export const favoriteAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => ({
        url: "/favorite",
      }),
      providesTags: ['Favorite']
    }),
    addFavorites: builder.mutation({
      query: (body) => ({
        url: "/favorite",
        method: 'POST',
        body
      }),
      invalidatesTags: ['Favorite']
    }),
    deleteFavorites: builder.mutation({
      query: (id) => ({
        url: `/favorite/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorite']
    })
  })
})

export const {useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation} = favoriteAPI