import { createAsyncThunk } from '@reduxjs/toolkit';

import { registerApi } from '../../api/register';
import type { IRegisterPayload } from '../../model/types';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (payload: IRegisterPayload, { rejectWithValue }) => {
    try {
      return await registerApi(payload);
    } catch (error) {
      return rejectWithValue(`Некорректные данные. Ошибка: ${error}`);
    }
  },
);
