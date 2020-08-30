import React from "react";
import HomeHeaderTitle from "../1_atoms/HomeHeaderTitle";
import HomeHeaderButtonBell from "../1_atoms/HomeHeaderButtonBell";
import HomeHeaderButtonSetting from "../1_atoms/HomeHeaderButtonSetting";
import HomeHeaderButtonMenu from "../1_atoms/HomeHeaderButtonMenu";
import HomeHeaderButtonLogout from "../1_atoms/HomeHeaderButtonLogout";
import HomeHeaderButtonUserIcon from "../1_atoms/HomeHeaderButtonUserIcon";

const HomeHeader = () => {
  return (
    <>
      <nav
        className="navbar has-background-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item has-text-white">
            <HomeHeaderTitle />
          </div>
          <div
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <div className="navbar-item has-text-white">
              <HomeHeaderButtonMenu />
            </div>
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end mr-3">
            <div className="navbar-item has-text-white">
              <HomeHeaderButtonUserIcon />
            </div>
            <div className="navbar-item has-text-white">
              <HomeHeaderButtonLogout />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeHeader;
