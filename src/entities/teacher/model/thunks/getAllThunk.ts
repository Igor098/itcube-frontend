import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllTeachersApi } from '../../api/getAllTeachers';

export const getAllTeachersThunk = createAsyncThunk(
  'admin/teachers',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllTeachersApi();
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
