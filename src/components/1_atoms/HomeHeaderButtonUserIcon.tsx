import React from "react";

const HomeHeaderButtonUserIcon = () => {
  const onClickFunc = () => {
    console.log("click");
  };
  return (
    <>
      <div>
        <button
          className="button is-primary is-rounded tooltip is-tooltip-bottom"
          data-tooltip="ユーザ情報"
          style={{ paddingRight: 0, paddingLeft: 0 }}
          onClick={onClickFunc}
        >
          <span className="image">
            <img
              className="is-rounded"
              style={{
                width: 40,
                height: 40,
                maxHeight: "none",
                objectFit: "cover",
              }}
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="user"
            />
          </span>
        </button>
      </div>
    </>
  );
};

export default HomeHeaderButtonUserIcon;
