import { createAsyncThunk } from '@reduxjs/toolkit';

import { createGroupApi } from '../../api/createGroup';
import { type IGroupCreate } from '../../model/types';

export const createGroupThunk = createAsyncThunk(
  'groups/create',
  async (data: IGroupCreate, { rejectWithValue }) => {
    try {
      return await createGroupApi(data);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
