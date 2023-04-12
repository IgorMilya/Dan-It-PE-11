import {PRODUCTS} from "../types";
import {request} from "../../tools/request";

const getProducts = (res) => ({
  type: PRODUCTS.GET_PRODUCTS,
  payload: {res}
})

export const getProductsAsync = () => {
  return async (dispatch) => {
    const {res} = await request({url: "/"})
    dispatch(getProducts(res.products))
  }
}