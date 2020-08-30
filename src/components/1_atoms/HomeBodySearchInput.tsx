import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/index";
import { setWord, setRes } from "../../stores/search";

const HomeBodySearchInput = () => {
  const word = useSelector((state: RootState) => state.search.word);
  const titleList = useSelector(
    (state: RootState) => state.search.resTitleList
  );
  const dispatch = useDispatch();

  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setWord(e.target.value));
  };

  const enterPressFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13 && word) {
      dispatch(setRes(word));
    }
  };
  return (
    <>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="例：SHAMAN KING"
            onKeyPress={enterPressFunc}
            onChange={onChangeFunc}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default HomeBodySearchInput;
