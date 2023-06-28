import { createSlice } from '@reduxjs/toolkit';
import {
  getPositions,
  getToken,
  getUserInfo,
  getUsers,
  sendUser,
} from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    token: null,
    users: [],
    totalPages: 0,
    positions: [],
    userId: [],
    registered: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload;
      })
      .addCase(getToken.rejected, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = [...state.users, ...payload.users];
        state.totalPages = payload.total_pages;
      })
      .addCase(getUsers.rejected, state => {
        state.isLoading = true;
      })
      .addCase(sendUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(sendUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.registered = true;
        state.userId = payload.user_id;
        state.users = [];
      })
      .addCase(sendUser.rejected, state => {
        state.isLoading = true;
      })
      .addCase(getPositions.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPositions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.positions = payload;
      })
      .addCase(getPositions.rejected, state => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(getUserInfo.rejected, state => {
        state.isLoading = true;
      }),
});

// export const {} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
