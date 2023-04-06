import { createSlice } from "@reduxjs/toolkit";
import AuthActions from "./authOperations.js";

const initialState = {
  user: {},
  isLogged: false,
  isLoading: false,
  accessToken: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(AuthActions.register.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(AuthActions.register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.register.rejected, (state, action) => {
      state.error = action.payload;
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.login.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(AuthActions.login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.login.rejected, (state, action) => {
      state.error = action.payload;
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.logout.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(AuthActions.logout.fulfilled, (state) => {
      state.accessToken = null;
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.logout.rejected, (state, action) => {
      state.error = action.payload;
      state.accessToken = null;
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.refresh.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(AuthActions.refresh.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(AuthActions.refresh.rejected, (state, action) => {
      state.error = action.payload;
      state.accessToken = null;
      state.isLogged = false;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
