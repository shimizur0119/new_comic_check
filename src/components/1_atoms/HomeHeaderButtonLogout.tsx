import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

const HomeHeaderButtonLogout = () => {
  const firebase = useFirebase();
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const onClickFunc = () => {
    return firebase.logout();
  };
  return (
    <>
      <div>
        <button
          className="button is-primary tooltip is-tooltip-bottom"
          data-tooltip="ログアウト"
          onClick={onClickFunc}
        >
          <span className="icon is-large">
            <i className="fas fa-2x fa-sign-out-alt" />
          </span>
        </button>
      </div>
    </>
  );
};

export default HomeHeaderButtonLogout;
