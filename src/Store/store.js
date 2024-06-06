import { createSlice, configureStore, combineSlices } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { userSlice } from "./userSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig={
  key:"root",
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


export const rootReducer = combineSlices(userSlice,settingSlice);

export const { setLang } = settingSlice.actions;
const persistreducer = persistReducer(persistConfig,rootReducer);



export const store = configureStore({
  reducer: persistreducer
});
export const persistor = persistStore(store);
