import {CASH} from "../types"

export const addCashAction = (money) => ({
  type: CASH.ADD_CASH,
  payload: {money}
})

export const getCashAction = (money) => ({
  type: CASH.GET_CASH,
  payload: {money}
})
