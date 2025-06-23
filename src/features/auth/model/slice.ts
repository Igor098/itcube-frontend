import { createSlice } from '@reduxjs/toolkit';

import {
  handleAuthenticated,
  handlePending,
  handleRejected,
  handleUnauthenticated,
} from '../model/sliceHandlers';

import { checkAuthThunk } from './thunks/checkAuthThunk';
import { loginThunk } from './thunks/loginThunk';
import { logoutThunk } from './thunks/logoutThunk';
import { registerThunk } from './thunks/registerThunk';
import { type IAuthSlice } from './types';

const initialState: IAuthSlice = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
  isInitialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        handlePending(state);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        handleAuthenticated(state, action);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(registerThunk.pending, (state) => {
        handlePending(state);
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        handleAuthenticated(state, action);
      })
      .addCase(registerThunk.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(checkAuthThunk.pending, (state) => {
        handlePending(state);
      })
      .addCase(checkAuthThunk.fulfilled, (state, action) => {
        handleAuthenticated(state, action);
        state.isInitialized = true;
      })
      .addCase(checkAuthThunk.rejected, (state) => {
        handleUnauthenticated(state);
        state.isInitialized = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        handleUnauthenticated(state);
      });
  },
});

export default authSlice.reducer;
