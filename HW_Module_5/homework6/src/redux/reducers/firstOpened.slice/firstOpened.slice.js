import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isFirstOpened: false
}

const firstOpenedSlice = createSlice({
  name: 'isFirstOpened',
  initialState,
  reducers: {
    openFirstModal(state) {
      state.isFirstOpened = true
    },
    closeFirstModal(state) {
      state.isFirstOpened = false
    }
  }
})

export const {openFirstModal, closeFirstModal} = firstOpenedSlice.actions
export default firstOpenedSlice.reducer