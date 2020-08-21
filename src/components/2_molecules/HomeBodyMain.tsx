import React from "react";
import HomeBodySearchInput from "../1_atoms/HomeBodySearchInput";

const HomeBodyMain = () => {
  return (
    <>
      <div className="hero has-background-primary has-text-white">
        <div className="hero-body">
          <div>
            <h1 className="title has-text-white">Get Started</h1>
            <h2 className="subtitle has-text-white">さあ、始めましょう</h2>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div>新刊情報が気になるマンガのタイトルを検索してみよう</div>
              <HomeBodySearchInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBodyMain;
