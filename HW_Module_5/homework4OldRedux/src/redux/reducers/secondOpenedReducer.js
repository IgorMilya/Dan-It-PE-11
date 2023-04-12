import {SECOND_OPENED} from "../types";

const initialState ={
  isSecondOpened: false
}

export const secondOpenedReducer = (state= initialState, action) => {
  switch (action.type) {
    case SECOND_OPENED.OPEN_SECOND_MODAL:
      return {...state, isSecondOpened: true}
    case SECOND_OPENED.CLOSE_SECOND_MODAL:
      return {...state, isSecondOpened: false}
    default:
      return state
  }
}