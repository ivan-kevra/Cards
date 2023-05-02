import { createSlice } from "@reduxjs/toolkit";
import { authApi, ProfileType, ResponseType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});

const register = createAppAsyncThunk<void, ResponseType>("auth/register", async (arg) => {
  await authApi.register(arg);
});
const login = createAppAsyncThunk<{ profile: ProfileType }, ResponseType>("auth/login", async (arg) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});
const forgot = createAppAsyncThunk<void, ResponseType>("auth/forgot", async (arg) => {
  await authApi.forgot(arg);
});

export const authReducer = slice.reducer;
// export const authActions = slice.actions;

export const authThunks = { register, login, forgot };
