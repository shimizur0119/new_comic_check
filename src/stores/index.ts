import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import * as History from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { firebaseReducer, actionTypes } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

// それぞれ slice.reducer を default export している前提
import searchReducer from "./search";
import userDataReducer from "./userData";
import loginReducer from "./login";

// type import
import { LoginType } from "./login";

export const history = History.createBrowserHistory();

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [actionTypes.LOGIN],
    },
  }),
  routerMiddleware(history),
];

const reducer = combineReducers({
  router: connectRouter(history),
  search: searchReducer,
  userData: userDataReducer,
  login: loginReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = configureStore({ reducer, middleware: middlewares });

export type RootState = ReturnType<typeof store.getState>;

export default store;
