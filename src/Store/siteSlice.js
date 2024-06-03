import { createSlice } from "@reduxjs/toolkit"



const initialState={
    profile:{
        user_Id:null,
    }
}
const name= "site";

export const userSlice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder.addCase().addCase();
  },
});