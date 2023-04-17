import {configureStore} from "@reduxjs/toolkit"
import {API} from "../../services/API"
import cartReducer from "../reducers/cart.slice/cart.slice"
import totalSlice from "../reducers/total.slice/total.slice";
import cardDataReducer from "../reducers/cardData.slice/cardData.slice"
import firstOpenedReducer from "../reducers/firstOpened.slice/firstOpened.slice"
import secondOpenedReducer from "../reducers/secondOpened.slice/secondOpened.slice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cardData: cardDataReducer,
    firstOpened: firstOpenedReducer,
    secondOpened: secondOpenedReducer,
    total: totalSlice,
    [API.reducerPath]: API.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware),

})

