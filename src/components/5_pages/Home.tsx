import React from "react";
import HomeHeaderTitle from "../1_atoms/HomeHeaderTitle";
import HomeHeaderButtonBell from "../1_atoms/HomeHeaderButtonBell";
import HomeHeaderButtonSetting from "../1_atoms/HomeHeaderButtonSetting";
import HomeHeader from "../2_molecules/HomeHeader";
import HomeBody from "../3_organisms/HomeBody";
import HomeFooter from "../3_organisms/HomeFooter";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </>
  );
};

export default Home;
