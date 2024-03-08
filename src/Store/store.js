import { createSlice, configureStore } from "@reduxjs/toolkit";
const settingSlice = createSlice({
  name: "setting",
  initialState: {
    lang: "fa",
  },
  reducers: {
    setLang: (state, data) => {
      const { lang } = data.payload;
      state.lang = lang;
    },
  },
});

export const { setLang } = settingSlice.actions;

export const store = configureStore({
  reducer: settingSlice.reducer,
});
