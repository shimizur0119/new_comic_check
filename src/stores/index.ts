import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// それぞれ slice.reducer を default export している前提
import searchReducer from "./search";
import userDataReducer from "./userData";
import loginReducer from "./login";

// type import
import { LoginType } from "./login";

const reducer = combineReducers({
  search: searchReducer,
  userData: userDataReducer,
  login: loginReducer,
});

type ResType = object;
export type Search = {
  word: string;
  resData: ResType;
  resTitleList: Array<string>;
};

export type StoreState = {
  search: Search;
  login: LoginType;
};
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;

export default store;
