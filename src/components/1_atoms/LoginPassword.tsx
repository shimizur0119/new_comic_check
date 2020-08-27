import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../stores/index";
import { setPassword } from "../../stores/login";

const LoginPassword = () => {
  const dispatch = useDispatch();
  const password = useSelector((state: StoreState) => state.login.password);
  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  return (
    <>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={onChangeFunc}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginPassword;
