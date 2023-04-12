import {FIRST_OPENED} from "../types";

const initialState ={
  isFirstOpened: false
}

export const firstOpenedReducer = (state= initialState, action) => {
  switch (action.type) {
    case FIRST_OPENED.OPEN_FIRST_MODAL:
      return {...state, isFirstOpened: true}
    case FIRST_OPENED.CLOSE_FIRST_MODAL:
      return {...state, isFirstOpened: false}
    default:
      return state
  }
}