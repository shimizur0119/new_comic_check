import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./index";

import { auth } from "../firebase";

// Stateの初期状態
export type LoginType = {
  email: string;
  password: string;
  user: firebase.User | null;
};

const initialState: any = {
  email: "",
  password: "",
  user: null,
};

// export type LoginType = typeof initialState;

export const loginFetch = createAsyncThunk(
  "login/fetch",
  async (arr: Array<string>) => {
    const [email, password] = arr;
    console.log("login fetch");
    const data = await auth
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        console.log("login!!");
        return e;
      })
      .catch(() => {
        console.log("login error...");
      });
    console.log(data);
    const user = auth.currentUser;
    console.log(user);
    return user;
  }
);

// Sliceを生成する
const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return { ...state, email: action.payload };
    },
    setPassword: (state, action) => {
      return { ...state, password: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginFetch.fulfilled, (state, action) => {
      return { ...state, user: action.payload };
    });
  },
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setEmail, setPassword } = slice.actions;
