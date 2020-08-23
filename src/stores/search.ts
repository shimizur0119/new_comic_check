import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

// Stateの初期状態
const initialState = {
  word: "",
  resData: {},
  resTitleList: [],
};

type GoogleBooksApiReaData = {
  volumeInfo: {
    title: string;
    publishedDate: string;
    authors: Array<string>;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    readingModes: {
      text: boolean;
      image: boolean;
    };
  };
};

export const setRes = createAsyncThunk<any, string>(
  "search/fetch",
  async (word) => {
    // const word = "shamanking";
    const axiosConf: AxiosRequestConfig = {
      baseURL: "https://www.googleapis.com/books/v1/",
      url: `./volumes?q=intitle:${word}&projection=lite&orderBy=newest&printType=books`,
      method: "get",
      timeout: 1000,
    };
    const res = await axios(axiosConf);
    const resTitleList: Array<object> = res.data.totalItems
      ? res.data.items.map((e: GoogleBooksApiReaData) => {
          const imageLink = e.volumeInfo.readingModes.image
            ? e.volumeInfo.imageLinks.thumbnail
            : "";
          const data = {
            title: e.volumeInfo.title,
            authors: e.volumeInfo.authors,
            publishedDate: e.volumeInfo.publishedDate,
            description: e.volumeInfo.description,
            imageLink: imageLink,
          };
          return data;
        })
      : [];
    return [res.data, resTitleList];
  }
);

// Sliceを生成する
const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setWord: (state, action) => {
      return Object.assign({}, state, { word: action.payload });
    },
    testFunc: (state) => {
      return Object.assign({}, state, { word: "" });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setRes.fulfilled, (state, action) => {
      const [_resData, _resTitleList] = action.payload;
      return Object.assign({}, state, {
        resData: _resData,
        resTitleList: _resTitleList,
      });
    });
  },
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setWord } = slice.actions;
