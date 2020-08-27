import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putKeyword } from "../../stores/userData";

const HomeBodyMain2 = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const addFunc = () => {
    console.log(keyword);
    dispatch(putKeyword(keyword));
  };
  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <div className="hero has-text-black">
        <div className="hero-body">
          <div>
            <h1 className="title">Add Title Word</h1>
            <h2 className="subtitle">キーワードを登録しよう</h2>
          </div>
          <div>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div>登録してみよう</div>
                <div className="field has-addons">
                  <div className="control has-icons-left is-expanded">
                    <input
                      type="text"
                      className="input"
                      onChange={changeFunc}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-plus-circle"></i>
                    </span>
                  </div>
                  <div className="control">
                    <button className="button" onClick={addFunc}>
                      Add Keyword
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBodyMain2;
