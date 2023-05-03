import {Router} from "express";
import {
  getProductsController,
  getProductController,
  addProductController,
  deleteProductController,
  putProductController
} from "./controller.js";

const productRouter = Router();

productRouter.get("/", getProductsController)
productRouter.get("/:id", getProductController)
productRouter.post("/", addProductController)
productRouter.put("/", putProductController)
productRouter.delete("/:id", deleteProductController)

export default productRouter