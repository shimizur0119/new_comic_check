import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider, useSelector } from "react-redux";
import store from "./stores";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";

// bulma
import "./css/style.css";
// fontawesome
import "@fortawesome/fontawesome-free/js/all.js";

//My Component
import Login from "./components/5_pages/Login";
import Home from "./components/5_pages/Home";

// auth
import firebase, { auth } from "./firebase";
import { history } from "./stores/index";

import { rrfConfig } from "./firebase/config";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { RootState } from "./stores";

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App() {
  const firebase = useFirebase();
  // const auth = useSelector((state: RootState) => state.firebase.auth);
  const RedirectFunc = () => <Redirect to="/home" />;
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <ConnectedRouter history={history}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={RedirectFunc} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
              </Switch>
            </BrowserRouter>
          </ConnectedRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
}

export default App;
