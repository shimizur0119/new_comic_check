import React from "react";
const Dummy_Data = {
  title: "ＳＨＡＭＡＮ　ＫＩＮＧ　マルコス（１）",
  authors: ["武井宏之", "ジェット草村"],
  publisher: "講談社",
  publishedDate: "2020-08-17",
  description:
    "「全てはメイデン様のために――」グレート・スピリッツにいた全てのシャーマンは地上へと帰還した。しかしただ一人、マルコは行方知れずに。彼を探すため、X-LAWSのメンバーは世界各地へ飛ぶ。ライハイトはハオ組のラキストに会うため、メキシコの麻薬紛争地帯に向かい、変わり果てたペヨーテと遭遇する。",
  imageLink:
    "http://books.google.com/books/content?id=PDj2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  listPrice: 660,
};

const HomeBodySearchResult = () => {
  const data = Dummy_Data;
  return (
    <>
      <div className="has-background-white has-text-black box mb-2">
        <article className="media">
          <div className="media-left">
            <figure className="image">
              <img width={128} height={182} src={data.imageLink} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <h1 className="title is-size-2">{data.title}</h1>
              <h3 className="subtitle">{`${data.authors.join(", ")}`}</h3>
              <div className="mb-2">
                <div className="is-size-5">発売日</div>
                <div className="mx-2 is-size-3">{data.publishedDate}</div>
              </div>
              <div className="mb-2">
                <div className="is-size-5">定価</div>
                <div className="mx-2">
                  <span className="is-size-3">{data.listPrice}</span>
                  <span className="is-size-4">円 +tax</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="is-size-5">説明</div>
                <div className="mx-2">{data.description}</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default HomeBodySearchResult;
