import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshCurrentUser } from './authOperations';

const hendlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

const handleRefreshFulfiled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, hendlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, hendleRejected)
      .addCase(logIn.pending, hendlePending)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logIn.rejected, hendleRejected)
      .addCase(logOut.pending, hendlePending)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, hendleRejected)
      .addCase(refreshCurrentUser.pending, hendlePending)
      .addCase(refreshCurrentUser.fulfilled, handleRefreshFulfiled)
      .addCase(refreshCurrentUser.rejected, hendleRejected),
});
