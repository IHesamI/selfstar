import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginApi } from "../api/apis";
import { parseJwt } from "../Utils/decode";



const initialState = {
  user_id: null,
  name: null,
  last_name: null,
  email: null,
};

function saveJwt(state,action){
    const { token } = action.payload;
    if(token){
      const { user_id, name, last_name, email } = parseJwt(token);
      state.user_id = user_id;
      state.name = name;
      state.last_name = last_name;
      state.email = email;
    }
}


export const signUp=createAsyncThunk('signUp',(payload)=>{

})
/**
 * @param {{email:string,password:string}} payload 
 * 
*/
export const login = createAsyncThunk("login", async ({payload,navigate}) => {
  const result = await loginApi(payload);
  if(result){
    console.error(result);
    navigate('/dashboard')
  }
  return result;
});


const name= "profile";

export const userSlice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, saveJwt)
      // .addCase(login.pending, saveJwt)
      .addCase(login.fulfilled, saveJwt);
  },
});

