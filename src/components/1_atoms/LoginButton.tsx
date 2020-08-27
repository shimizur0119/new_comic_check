import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../stores/index";
import { loginFetch } from "../../stores/login";

const LoginButton = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: StoreState) => state.login.email);
  const password = useSelector((state: StoreState) => state.login.password);

  const onClickFunc = () => {
    dispatch(loginFetch([email, password]));
  };

  return (
    <>
      <div className="field">
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
