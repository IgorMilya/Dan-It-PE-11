import {getProducts, addProduct, deleteProduct, putProduct, getProduct} from "./dataAccess.js";

export const getProductsService = () => getProducts()

export const getProductService = ({id}) => getProduct(id)


export const addProductService = (data) => {
  const result = addProduct(data)

  if (result.status === "OK") {
    return getProducts()
  }
}

export const deleteProductService = ({id}) => {
  const result = deleteProduct(id)

  if (result.status === "OK") {
    return getProducts()
  }
}

export const putProductService = (post) => {
  const result = putProduct(post)

  if (result.status === "OK") {
    return getProducts()
  }
}