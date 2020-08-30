import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase, { auth, providor } from "../firebase";

type User = {
  uid: string;
  displayName: string;
  email: string;
};

// Stateの初期状態
export type LoginType = {
  email: string;
  password: string;
  user: User | null;
};

const initialState: LoginType = {
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
    const data = await auth.signInWithEmailAndPassword(email, password);
    console.log(data);
    const user = data.user;
    console.log(user);
    return user;
  }
);

export const loginFetchWithGoogle = createAsyncThunk(
  "login/fetchWithGoogle",
  async () => {
    const data = await auth.signInWithPopup(providor);
    const user = data.user;
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
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
  },
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setEmail, setPassword, setUser } = slice.actions;
