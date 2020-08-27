import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./css/style.css";
import { Provider } from "react-redux";
import store from "./stores";
import * as firebase from "firebase";

//My Component
import Login from "./components/5_pages/Login";
import Home from "./components/5_pages/Home";

// const firebaseConfig = {
//   apiKey: "AIzaSyAzdXlRZNwJ8ooAVUkyP3K3qFBz5AUMzHg",
//   authDomain: "develop-542b4.firebaseapp.com",
//   databaseURL: "https://develop-542b4.firebaseio.com",
//   projectId: "develop-542b4",
//   storageBucket: "develop-542b4.appspot.com",
//   messagingSenderId: "103556982071",
//   appId: "1:103556982071:web:d591790e3aa5ba309026b2",
//   measurementId: "G-XBY49G66PW",
// };
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// export const auth = firebase.auth();

function App() {
  const RedirectFunc = () => <Redirect to="/login" />;
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={RedirectFunc} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
