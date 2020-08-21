import React from "react";

const LoginPassword = () => {
  return (
    <>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginPassword;
