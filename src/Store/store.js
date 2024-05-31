import { createSlice, configureStore, combineSlices } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { userSlice } from "./userSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig={
  key:"setting",
  storage,
}

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


export const rootReducer = combineSlices(persistReducer(persistConfig,userSlice),settingSlice);

export const { setLang } = settingSlice.actions;


export const store = configureStore({
  reducer: rootReducer
});
export const persistor = persistStore(store);
