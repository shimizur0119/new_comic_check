import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/index";
import { setEmail } from "../../stores/login";

const LoginId = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.login.email);
  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  return (
    <>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={onChangeFunc}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginId;
