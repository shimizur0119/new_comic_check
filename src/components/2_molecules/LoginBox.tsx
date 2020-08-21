import React from "react";
import LoginTitle from "../1_atoms/LoginTitle";
import LoginPassword from "../1_atoms/LoginPassword";
import LoginId from "../1_atoms/LoginId";
import LoginButton from "../1_atoms/LoginButton";

const LoginBox = () => {
  return (
    <>
      <div className="columns is-vcentered">
        <div className="box column is-half is-offset-one-quarter has-background-grey-light">
          <LoginTitle />
          <div className="px-3 my-5">
            <LoginId />
            <LoginPassword />
            <LoginButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
