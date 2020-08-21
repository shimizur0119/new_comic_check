import React from "react";

const HomeBodySearchInput = () => {
  return (
    <>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="例：SHAMAN KING" />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default HomeBodySearchInput;
