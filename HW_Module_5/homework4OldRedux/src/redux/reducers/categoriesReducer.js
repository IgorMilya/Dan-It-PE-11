import {CATEGORIES} from "../types"

const initialState = {
  categoriesData: []
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES.GET_CATEGORIES:
      return {...state, categoriesData: action.payload.res}
    default:
      return state
  }
}