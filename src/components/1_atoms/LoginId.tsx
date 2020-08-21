import React from "react";

const LoginId = () => {
  return (
    <>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginId;
