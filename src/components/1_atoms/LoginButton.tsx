import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/index";
import { loginFetch } from "../../stores/login";
import { useFirebase } from "react-redux-firebase";

const LoginButton = () => {
  const firebase = useFirebase();
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.login.email);
  const password = useSelector((state: RootState) => state.login.password);

  const onClickFunc = () => {
    // dispatch(loginFetch([email, password]));
    firebase.login({
      email: email,
      password: password,
    });
  };

  return (
    <>
      <div className="field buttons is-centered">
        <button
          className="button is-primary is-fullwidth"
          onClick={onClickFunc}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginButton;
