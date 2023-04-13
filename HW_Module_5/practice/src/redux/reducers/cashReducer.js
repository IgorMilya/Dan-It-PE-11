import {CASH} from "../types"

const defaultState = {
  cash: 5
}

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CASH.ADD_CASH:
      return {...state, cash: state.cash + action.payload.money}
    case CASH.GET_CASH:
      return {...state, cash: state.cash - action.payload.money}
    default:
      return state
  }
}