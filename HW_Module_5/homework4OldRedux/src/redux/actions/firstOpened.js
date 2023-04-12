import {FIRST_OPENED} from "../types";

export const openFirstModal = () => ({
  type: FIRST_OPENED.OPEN_FIRST_MODAL
})

export const closeFirstModal = () => ({
  type: FIRST_OPENED.CLOSE_FIRST_MODAL
})