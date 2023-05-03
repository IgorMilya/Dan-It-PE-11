import {
  getProductsService,
  addProductService,
  deleteProductService,
  putProductService,
  getProductService
} from "./service.js";

export const getProductsController = (req, res) => {
  const data = getProductsService()
  res.json({data, message: "GET PRODUCTS"})
}

export const getProductController = (req, res) => {
  const data = getProductService(req.params)
  res.json({data, message: "GET PRODUCT"})
}


export const addProductController = (req, res) => {
  const data = addProductService(req.body)
  res.json({data, message: "ADD PRODUCT"})
}

export const deleteProductController = (req, res) => {
  const data = deleteProductService(req.params)
  res.json({data, message: "DELETE PRODUCT"})
}

export const putProductController = (req, res) => {
  const data = putProductService(req.body)
  res.json({data, message: "UPDATE PRODUCT"})
}
