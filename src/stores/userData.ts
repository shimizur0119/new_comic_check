import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { db } from "../firebase";

// Stateの初期状態
const initialState = {
  word: "",
  resData: {},
  resTitleList: [],
};

export const putKeyword = createAsyncThunk<any, string>(
  "userData/fetch",
  async (keyword) => {
    await db.collection("users").add({
      keyword: keyword,
    });
    return;
  }
);

// Sliceを生成する
const slice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(putKeyword.fulfilled, (state, action) => {
      return { ...state };
    });
  },
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const {} = slice.actions;
