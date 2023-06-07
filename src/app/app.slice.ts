import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const appInitialState = {
  error: null as null | string,
  isLoading: true,
  isAppInitialized: false
};

type InitialStateType = typeof appInitialState

const slice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error;
    },
    setIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isAppInitialized = action.payload.isInitialized;
    }
  }
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;