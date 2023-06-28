import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPositions,
  fetchToken,
  fetchUserInfo,
  fetchUsers,
  postUser,
} from "../services/usersAPI";

export const getToken = createAsyncThunk(
  "token/fetchToken",
  async (_, thunkApi) => {
    try {
      const { token } = await fetchToken();
      console.log(token);
      return token;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ page }, thunkApi) => {
    try {
      const { users } = await fetchUsers({ page });
      console.log(users);
      return users;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const sendUser = createAsyncThunk(
  "users/postUser",
  async (formData, thunkApi) => {
    try {
      const data = await postUser(formData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getPositions = createAsyncThunk(
  "users/positions",
  async (_, thunkApi) => {
    try {
      const { positions } = await fetchPositions();
      console.log(positions);
      return positions;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (id, thunkApi) => {
    try {
      const { data } = await fetchUserInfo(id);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
