import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMeApi } from '../../api/me';

export const checkAuthThunk = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      return await getMeApi();
    } catch (error) {
      return rejectWithValue(`Сессия недоступна. Ошибка: ${error}`);
    }
  },
);
