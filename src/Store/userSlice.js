import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



const initialState = {
  user_id: null,
  name: null,
  last_name: null,
  email: null,
};

function saveJwt(state,action){
    const { jwt } = action.payload;
    if(jwt){
        state.jwt=jwt;
    }
}

export const signUp=createAsyncThunk('signUp',(payload)=>{
})

export const login=createAsyncThunk('login',(payload)=>{
})


const name= "profile";

export const userSlice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled,saveJwt).addCase(login.fulfilled,saveJwt);
  },
});

