import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putKeyword } from "../../stores/userData";

const HomeBodyHowToUse = () => {
  return (
    <>
      <div className="hero has-text-black">
        <div className="hero-body">
          <div className="mb-5">
            <h1 className="title">How To Use</h1>
            <h2 className="subtitle">使い方を確認しよう</h2>
          </div>
          <div className="container">
            <div className="message is-primary">
              <div className="message-header is-size-4">
                <p>STEP 1 : タイトルを確認</p>
              </div>
              <div className="message-body is-size-5">
                <p>
                  上記の<strong>Get Started</strong>{" "}
                  の検索欄で気になるマンガのタイトルを検索しよう
                </p>
                <p>
                  検索結果に想定した最新刊が表示されたら、その
                  <strong>タイトル</strong>を<strong>正確に</strong>
                  覚えておこう（クリップボードにコピーがオススメ）
                </p>
                <p>
                  ※「Google Books
                  API」で登録されているタイトルと一致しないと思っている結果が表示されない場合があるから注意しよう
                </p>
              </div>
            </div>
            <div className="message is-primary">
              <div className="message-header is-size-4">
                <p>STEP 2 : ユーザ情報にタイトルを登録</p>
              </div>
              <div className="message-body is-size-5">
                <p>
                  ユーザ情報設定ページから、いま確認したタイトルを登録しよう
                </p>
              </div>
            </div>
            <div className="message is-primary">
              <div className="message-header is-size-4">
                <p>STEP ３ : 完了！あとは通知を待つだけ！</p>
              </div>
              <div className="message-body is-size-5">
                <p>
                  毎日 0:00
                  にあなたの登録したタイトルが含まれる新刊情報が更新されていないか「New
                  Comic Check」が自動で確認してくれます。
                </p>
                <p>新刊情報があれば各種通知機能であなたにお知らせします！！</p>
                <p>
                  「気になっていたマンガなのに、知らないうちに新刊出てた。。。」なんて悲しい思いはもうしなくて済むかもしれません
                </p>
                <p>少しでもあなたの生活のお役に立てれば幸いです。</p>
                <p>「HUNTERxHUNTER」新刊出るといいなあ。。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBodyHowToUse;
