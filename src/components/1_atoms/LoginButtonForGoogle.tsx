import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { RootState } from "../../stores";

const LoginButtonWithGoogle = () => {
  const firebase = useFirebase();
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const onClickFunc = () => {
    console.log("click googleButton");
    return firebase.login({ provider: "google", type: "popup" });
  };
  return (
    <>
      <div className="field">
        <button className="button is-black is-fullwidth" onClick={onClickFunc}>
          <span className="icon is-small">
            <i className="fab fa-google"></i>
          </span>
          <span>Login with your Google Account</span>
        </button>
      </div>
    </>
  );
};

export default LoginButtonWithGoogle;
