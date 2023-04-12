import {createStore, applyMiddleware} from "redux";
import {composeEnhancers, middleware} from '../middleware';
import {rootReducer} from "../reducers/rootReducer";


export const  store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))