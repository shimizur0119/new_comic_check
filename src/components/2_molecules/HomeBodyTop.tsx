import React from "react";
import pic from "../../pic/shamanking_3.png";

const HomeBodyTop = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="columns is-vcentered mx-5">
            <div className="column">
              <div>
                <h1 className="title">New Comic Check へようこそ</h1>
                <h2 className="subtitle">
                  ここではGoogle Books API
                  を利用して、あなたの好きなマンガの新刊発売情報を確認することができます。
                </h2>
              </div>
              <div className="columns is-mobile is-marginless mt-3">
                <div className="column">
                  <button className="button is-primary is-large is-fullwidth">
                    Get Started
                  </button>
                </div>
                <div className="column">
                  <button className="button is-primary is-large is-fullwidth">
                    How To Use
                  </button>
                </div>
              </div>
            </div>
            <div className="column">
              <img src={pic} alt="pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBodyTop;
