import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem('cartProducts')) || []
}

const cartSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addCartProduct(state, action) {
      state.data.push(action.payload)
    },
    removeCartProduct(state, action) {
      state.data.splice(action.payload.index, 1)
      state.data = [...state.data]
    },
    removeAllCartProduct(state, action) {
      state.data = state.data.filter(el => el.id !== action.payload.id)
    },
    emptyCart(state) {
      state.data = []
    }
  }
})

export const {addCartProduct, removeCartProduct, removeAllCartProduct, emptyCart} = cartSlice.actions
export default cartSlice.reducer