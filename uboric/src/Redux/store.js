import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./App/reducer";

const rootReducer = combineReducers({ isApp: ProductReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
