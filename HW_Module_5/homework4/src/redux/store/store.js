import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../reducers/cart.slice/cart.slice"
import favoriteSlice from "../reducers/favorite.slice/favorite.slice"
import cardDataSlice from "../reducers/cardData.slice/cardData.slice"
import firstOpenedSlice from "../reducers/firstOpened.slice/firstOpened.slice"
import secondOpenedSlice from "../reducers/secondOpened.slice/secondOpened.slice"
import {productsAPI} from "../../services/ProductsService";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
    firstOpened: firstOpenedSlice,
    secondOpened: secondOpenedSlice,
    cardData: cardDataSlice,
    [productsAPI.reducerPath]: productsAPI.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),

})

