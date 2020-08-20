import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "bulma/css/bulma.css";

//My Component
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
