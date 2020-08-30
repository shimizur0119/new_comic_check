import React from "react";
import HomeHeader from "../2_molecules/HomeHeader";
import HomeBody from "../3_organisms/HomeBody";
import HomeFooter from "../3_organisms/HomeFooter";
import { useFirebase, isEmpty, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const Home = () => {
  const firebase = useFirebase();
  const auth = useSelector((state: RootState) => state.firebase.auth);
  return (
    <>
      <div>
        {!isLoaded(auth) ? (
          <div>now loading...</div>
        ) : isEmpty(auth) ? (
          <Redirect to="/login" />
        ) : (
          <>
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
