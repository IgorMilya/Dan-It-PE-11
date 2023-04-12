import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../reducers/cart.slice/cart.slice"
import favoriteSlice from "../reducers/favorite.slice/favorite.slice"
import cardDataSlice from "../reducers/cardData.slice/cardData.slice"
import productsSlice from "../reducers/product.slice/products.slice"
import categoriesSlice from "../reducers/categories.slice/categories.slice"
import firstOpenedSlice from "../reducers/firstOpened.slice/firstOpened.slice"
import secondOpenedSlice from "../reducers/secondOpened.slice/secondOpened.slice"

export default  configureStore({

  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
    firstOpened: firstOpenedSlice,
    secondOpened: secondOpenedSlice,
    cardData: cardDataSlice,
    products: productsSlice,
    categories: categoriesSlice
  }
})