import {configureStore} from "@reduxjs/toolkit"
import {productsAPI} from "../../services/ProductsService"
import cartReducer from "../reducers/cart.slice/cart.slice"
import favoriteReducer from "../reducers/favorite.slice/favorite.slice"
import cardDataReducer from "../reducers/cardData.slice/cardData.slice"
import firstOpenedReducer from "../reducers/firstOpened.slice/firstOpened.slice"
import secondOpenedReducer from "../reducers/secondOpened.slice/secondOpened.slice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    cardData: cardDataReducer,
    firstOpened: firstOpenedReducer,
    secondOpened: secondOpenedReducer,
    [productsAPI.reducerPath]: productsAPI.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),

})

