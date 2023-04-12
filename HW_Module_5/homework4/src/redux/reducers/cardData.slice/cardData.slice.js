import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cardData: {}
}

const cardDataSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    addData(state, action) {
      state.cardData = action.payload
    }
  }
})

export const {addData} = cardDataSlice.actions
export default cardDataSlice.reducer