import React from "react";
import HomeHeaderTitle from "../1_atoms/HomeHeaderTitle";
import HomeHeaderButtonBell from "../1_atoms/HomeHeaderButtonBell";
import HomeHeaderButtonSetting from "../1_atoms/HomeHeaderButtonSetting";

const HomeHeader = () => {
  return (
    <>
      <div className="level has-background-primary has-text-white	px-2 py-3 is-marginless">
        <div className="level-left">
          <HomeHeaderTitle />
        </div>
        <div className="level-right">
          <HomeHeaderButtonBell />
          <HomeHeaderButtonSetting />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
