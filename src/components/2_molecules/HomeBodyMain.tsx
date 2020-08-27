import React from "react";
import HomeBodySearchInput from "../1_atoms/HomeBodySearchInput";
import { StoreState } from "../../stores/index";
import { useSelector } from "react-redux";
import HomeBodySearchResult from "./HomeBodySearchResult";
import HomeBodySearchNoResult from "./HomeBodySearchNoResult";

const HomeBodyMain = () => {
  const titleList = useSelector(
    (state: StoreState) => state.search.resTitleList
  );
  const resData = useSelector((state: StoreState) => state.search.resData);
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
              <pre>
                <code>{titleList.length}</code>
              </pre>
              <pre>
                <code>{JSON.stringify(titleList, null, 2)}</code>
              </pre>
              <pre>
                <code>{JSON.stringify(resData, null, 2)}</code>
              </pre>
            </div>
          </div>
          {/* <HomeBodySearchResult />
          <HomeBodySearchNoResult /> */}
        </div>
      </div>
    </>
  );
};

export default HomeBodyMain;
