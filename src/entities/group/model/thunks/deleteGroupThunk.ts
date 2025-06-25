import { createAsyncThunk } from '@reduxjs/toolkit';

import { deleteGroupApi } from '../../api/deleteGroup';

export const deleteGroupThunk = createAsyncThunk(
  'groups/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      return await deleteGroupApi(id);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
