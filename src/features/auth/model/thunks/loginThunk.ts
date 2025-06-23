import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginApi } from '../../api/login';
import type { ILoginPayload } from '../../model/types';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      return await loginApi(payload);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
