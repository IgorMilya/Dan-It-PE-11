import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isSecondOpened: false
}

const secondOpenedSlice = createSlice({
  name: 'isSecondOpened',
  initialState,
  reducers: {
    openSecondModal(state) {
      state.isSecondOpened = true
    },
    closeSecondModal(state) {
      state.isSecondOpened = false
    }
  }
})

export const {openSecondModal, closeSecondModal} = secondOpenedSlice.actions
export default secondOpenedSlice.reducer