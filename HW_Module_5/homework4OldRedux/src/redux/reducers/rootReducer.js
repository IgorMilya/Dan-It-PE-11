import {combineReducers} from "redux";
import {cartReducer as cart} from "./cartReducer"
import {favoriteReducer as favorite} from "./favoriteReducer"
import {cardDataReducer as cardData} from "./cardDataReducer"
import {productsReducer as products} from "./productsReducer"
import {categoriesReducer as categories} from "./categoriesReducer"
import {firstOpenedReducer as firstOpened} from "./firstOpenedReducer"
import {secondOpenedReducer as secondOpened} from "./secondOpenedReducer"

export const rootReducer = combineReducers({
  cart,
  favorite,
  firstOpened,
  secondOpened,
  cardData,
  products,
  categories
})