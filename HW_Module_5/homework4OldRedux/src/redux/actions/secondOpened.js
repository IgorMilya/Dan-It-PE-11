import {SECOND_OPENED} from "../types";

export const openSecondModal = () => ({
  type: SECOND_OPENED.OPEN_SECOND_MODAL
})

export const closeSecondModal = () => ({
  type: SECOND_OPENED.CLOSE_SECOND_MODAL
})