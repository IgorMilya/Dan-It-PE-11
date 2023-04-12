import {FAVORITE} from '../types'

const initialState = {
  dataFav:  JSON.parse(localStorage.getItem('favoriteProducts')) || []
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE.ADD_FAVORITE_PRODUCT:
      return {...state, dataFav: [...state.dataFav, action.payload.item]}
    case FAVORITE.REMOVE_FAVORITE_PRODUCT:
      return {...state, dataFav: [...state.dataFav.filter(el => el.id !== action.payload.id)]}
    default:
      return state
  }
}