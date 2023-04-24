import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  total: 0
}

const totalSlice = createSlice({
  name: 'isSecondOpened',
  initialState,
  reducers: {
    getTotal(state, action){
      state.total = action.payload
    },
    plusNumber(state, action) {
      state.total += action.payload
    },
    minusNumber(state, action) {
      state.total -= action.payload
    }
  }
})

export const {plusNumber, minusNumber, getTotal} = totalSlice.actions
export default totalSlice.reducer