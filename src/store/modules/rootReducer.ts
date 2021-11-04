import { combineReducers } from "redux";
import { cart } from "./cart/reducer";

const combinedReducers = combineReducers({
  cart,
})

export { combinedReducers }