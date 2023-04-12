import {CARD_DATA} from "../types";

export const addData = (item) => ({
  type: CARD_DATA.ADD_DATA,
  payload: {item}
})