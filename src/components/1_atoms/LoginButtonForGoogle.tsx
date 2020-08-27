import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../stores/index";
import { loginFetch } from "../../stores/login";

const LoginButtonWithGoogle = () => {
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
          <span className="icon is-small">
            <i className="fas fa-google"></i>
          </span>
          <span>Login with your Google Account</span>
        </button>
      </div>
    </>
  );
};

export default LoginButtonWithGoogle;
