import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  dataFav: JSON.parse(localStorage.getItem('favoriteProducts')) || []
}

const favoriteSlice = createSlice({
  name: 'dataFav',
  initialState,
  reducers: {
    addFavoriteProduct(state, action) {
      // state.dataFav = [...state.dataFav, action.payload]
      state.dataFav.push(action.payload)
    },
    removeFavoriteProduct(state, action) {
      state.dataFav = [...state.dataFav.filter(el => el.id !== action.payload.id)]
    }
  }
})

export const {addFavoriteProduct, removeFavoriteProduct} = favoriteSlice.actions
export default favoriteSlice.reducer