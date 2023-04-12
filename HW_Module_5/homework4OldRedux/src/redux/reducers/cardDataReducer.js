import {CARD_DATA} from "../types"

const initialState = {
  cardData: {}
}

export const cardDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_DATA.ADD_DATA:
      return {...state, cardData: action.payload.item}
    default:
      return state
  }
}