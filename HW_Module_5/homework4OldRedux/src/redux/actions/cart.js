import {CART} from "../types";

export const addCartProduct = (item) => ({
  type: CART.ADD_CART_PRODUCT,
  payload: {item}
})

export const removeCartProduct = (cart) => ({
  type: CART.REMOVE_CART_PRODUCT,
  payload: {cart}
})

export const removeAllCartProduct = (id) => ({
  type: CART.REMOVE_ALL_PRODUCT,
  payload: {id}
})