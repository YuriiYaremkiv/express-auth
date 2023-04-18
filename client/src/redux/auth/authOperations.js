import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthServices";

class AuthActions {
  static login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.login(email, password);
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

  static register = createAsyncThunk(
    "auth/register",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.register(email, password);
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

  static logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.logout();
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

  static refresh = createAsyncThunk(
    "auth/refresh",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.refresh();
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );
}

export default AuthActions;
