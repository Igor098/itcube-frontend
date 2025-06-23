import { createAsyncThunk } from '@reduxjs/toolkit';

import { logoutApi } from '../../api/logout';

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  try {
    await logoutApi();
  } catch (error) {
    console.error(error);
  }
});
