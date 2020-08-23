import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// それぞれ slice.reducer を default export している前提
import searchReducer from "./search";
import cartReducer from "./cart";

const reducer = combineReducers({
  search: searchReducer,
  cart: cartReducer,
});

type ResType = object;
export type Search = {
  word: string;
  resData: ResType;
  resTitleList: Array<string>;
};

export type StoreState = {
  search: Search;
  cart: { name: string };
};
const store = configureStore({ reducer });

export default store;
