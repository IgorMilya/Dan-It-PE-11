import {combineReducers} from "redux";
import {cashReducer as cash} from "../reducers/cashReducer";
import {customerReducer as customer} from "../reducers/customerReducer";


export const rootReducer = combineReducers({
  cash,
  customer
})