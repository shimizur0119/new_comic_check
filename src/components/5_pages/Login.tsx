import React from "react";
import LoginBox from "../2_molecules/LoginBox";
import FirebaseuiButtons from "../2_molecules/FirebaseuiButtons";

const Login = () => {
  return (
    <>
      <div className="mt-6">
        <LoginBox />
      </div>
      <div className="mt-6">
        <FirebaseuiButtons />
      </div>
    </>
  );
};
export default Login;
