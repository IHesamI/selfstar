import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editProfileApi, loginApi, signUpApi, uploadFile } from "../api/apis";
import { parseJwt } from "../Utils/decode";
import { PURGE } from "redux-persist";



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
    let avatar_url,resume_url;
    return await editProfileApi(profile_id, payload).then(async (res) => {
      try {
        if (image) {
          avatar_url = (await uploadFile("avatar", image, res.profile_id)).data.avatar_url;
        }
        if (resume) {
          resume_url = (await uploadFile("resume", resume, res.profile_id)).data.resume_url;
        }
      } catch (e) {
        console.error(e);
      }
      return { ...res, avatar_url, resume_url };
    });
  }
);

/**
 * @param {{email:string,password:string}} payload 
 * 
*/
export const login = createAsyncThunk(
  "login",
  async ({ payload, navigate }) => {
    try {
      const result = await loginApi(payload);
      if (result) {
        navigate("/dashboard");
      }
      return result;
    } catch(e) {
      throw Error('user not found');
    }
  }
);


const name= "user";

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    delteAvatar(state) {
      state.profile.avatar_url = null;
    },
    deleteResume(state) {
      state.profile.resume_url = null;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, saveJwt)
      .addCase(login.fulfilled, saveJwt)
      .addCase(PURGE, () => {
        return initialState;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        const payload = action.payload;
        state.profile = { ...state.profile, ...payload };
      });
  },
});
export const { deleteResume, delteAvatar } = userSlice.actions;
