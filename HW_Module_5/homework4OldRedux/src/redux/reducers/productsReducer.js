import {PRODUCTS} from "../types"

const initialState = {
  data: []
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS:
      return {...state, data: action.payload.res}
    default:
      return state
  }
}