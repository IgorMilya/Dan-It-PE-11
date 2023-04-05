import { createStore } from "redux";
import { combineReducers } from "redux";
import { favoritesReducer } from "../../favoritesReducer";
import { counterReducer } from "../../counterReducer";
import { goodsReducer } from "../../goodsReducer";
import { cartReducer } from "../../cartReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    favorites: favoritesReducer,
    goods: goodsReducer,
    cart: cartReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
