import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./css/style.css";
import { Provider } from "react-redux";
import store from "./stores";

//My Component
import Login from "./components/5_pages/Login";
import Home from "./components/5_pages/Home";

function App() {
  // const RedirectFunc = () => <Redirect to="/login" />;
  const RedirectFunc = () => <Redirect to="/home" />;
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
