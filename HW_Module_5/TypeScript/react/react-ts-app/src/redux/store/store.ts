import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {API} from "../../services/API";
import userReducer from "../reducers/userSlice"

const rootReducer = combineReducers({
  userReducer,
  [API.reducerPath]: API.reducer
})

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']