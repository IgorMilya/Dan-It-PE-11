import {CUSTOMER} from "../types"

const defaultState = {
  customer: []
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CUSTOMER.ADD_MANY_CUSTOMERS:
      return {...state, customer: [...state.customer, ...action.payload.customer]}
    case CUSTOMER.ADD_CUSTOMER:
      return {...state, customer: [...state.customer, action.payload.customer]}
    case CUSTOMER.REMOVE_CUSTOMER:
      return {...state, customer: state.customer.filter(el => el.id !== action.payload.id)}
    default:
      return state
  }
}