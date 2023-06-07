import { createSlice } from "@reduxjs/toolkit";
import { authApi, AuthResponseType, EmailType, ProfileType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      });
  }
});

const register = createAppAsyncThunk<void, AuthResponseType>
("auth/register", async (arg) => {
  await authApi.register(arg);
});
const login = createAppAsyncThunk<{ profile: ProfileType }, AuthResponseType>
("auth/login", async (arg) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});
const sendNewPassword = createAppAsyncThunk<void, EmailType>
("auth/sendNewPassword", async (arg, thunkAPI) => {
  const res = await authApi.sendNewPassword(arg);
});

export const authReducer = slice.reducer;
// export const authActions = slice.actions;
export const authThunks = { register, login, sendNewPassword };