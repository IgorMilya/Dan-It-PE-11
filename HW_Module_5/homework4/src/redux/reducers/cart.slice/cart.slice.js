import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem('cartProducts')) || []
}

const cartSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addCartProduct(state, action) {
      // state.data = [...state.data, action.payload]
      state.data.push(action.payload)
    },
    removeCartProduct(state, action) {
      state.data.splice(action.payload, 1)
      state.data = [...state.data]
    },
    removeAllCartProduct(state, action) {
      state.data = state.data.filter(el => el.id !== action.payload)
    }
  }
})

export const {addCartProduct, removeCartProduct, removeAllCartProduct} = cartSlice.actions
export default cartSlice.reducer