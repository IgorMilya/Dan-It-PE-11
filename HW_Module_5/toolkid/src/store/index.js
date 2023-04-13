import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import {productsAPI} from "./ProductsService";

export default  configureStore({

  reducer: {
    todos: todoSlice,
      [productsAPI.reducerPath]: productsAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
})