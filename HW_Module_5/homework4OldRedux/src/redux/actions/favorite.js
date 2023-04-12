import {FAVORITE} from "../types";

export const addFavoriteProduct = (item) => ({
  type: FAVORITE.ADD_FAVORITE_PRODUCT,
  payload: {item}
})

export const removeFavoriteProduct = (id) => ({
  type: FAVORITE.REMOVE_FAVORITE_PRODUCT,
  payload: {id}
})