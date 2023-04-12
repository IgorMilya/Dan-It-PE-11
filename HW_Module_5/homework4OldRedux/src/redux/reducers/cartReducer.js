import {CART} from '../types'

const initialState = {
  data:  JSON.parse(localStorage.getItem('cartProducts')) || []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART.ADD_CART_PRODUCT:
      return {...state, data: [...state.data, action.payload.item]}
    case CART.REMOVE_CART_PRODUCT:
      return {...state, data: [...action.payload.cart]}
    case CART.REMOVE_ALL_PRODUCT:
      return {...state, data: state.data.filter(el => el.id !== action.payload.id)}
    default:
      return state
  }
}