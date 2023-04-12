import {CATEGORIES} from "../types";
import {request} from "../../tools/request";

const getCategories = (res) => ({
  type: CATEGORIES.GET_CATEGORIES,
  payload: {res}
})

export const getCategoriesAsync = () => {
  return async (dispatch) => {
    const {res} = await request({url: '/categories'})
    if (!res) return
    dispatch(getCategories(res.slice(0, 6)))
  }
}