import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editProfileApi, loginApi, signUpApi, uploadFile } from "../api/apis";
import { parseJwt } from "../Utils/decode";



const initialState = {
  profile: {
    profile_id: null,
    user: null,
    name: null,
    last_name: null,
    email: null,
    educationHistory: null,
    avatar_url: null,
    resume_url: null,
    links: [],
    lang: "fa",
  },
};

function saveJwt(state,action){
    const { token } = action.payload;
    if(token){
      const profile = parseJwt(token);
      console.error(profile);
      state.profile= profile;
    }
}


export const signUp = createAsyncThunk("signUp", async ({payload,navigate}) => {
  const result = await signUpApi(payload);
  if (result) {
    navigate("/dashboard");
  }
  return result;
});

export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ payload, profile_id, image, resume }) => {
    return await editProfileApi(profile_id, payload).then(async (res) => {
      if (image) {
        uploadFile("avatar", image, res.profile_id);
      }
      if (resume) {
        uploadFile("resume", resume, res.profile_id);
      }
      return res;
    });
  }
);

/**
 * @param {{email:string,password:string}} payload 
 * 
*/
export const login = createAsyncThunk("login", async ({payload,navigate}) => {
  const result = await loginApi(payload);
  if(result){
    navigate('/dashboard')
  }
  return result;
});


const name= "user";

export const userSlice = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, saveJwt)
      .addCase(login.fulfilled, saveJwt)
      .addCase(editProfile.fulfilled, (state, action) => {
        const payload = action.payload;
        state.profile = { ...state.profile, ...payload };
      });
  },
});

