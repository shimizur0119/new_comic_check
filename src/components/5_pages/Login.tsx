import React from "react";
import LoginBox from "../2_molecules/LoginBox";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const Login = () => {
  const auth = useSelector((state: RootState) => state.firebase.auth);
  return (
    <>
      <div className="mt-6">
        <LoginBox />
        {auth.uid && <Redirect to="/home" />}
      </div>
    </>
  );
};
export default Login;
