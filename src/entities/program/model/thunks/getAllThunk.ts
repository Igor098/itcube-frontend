import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllProgramsApi } from '../../api/getPrograms';

export const getAllProgramsThunk = createAsyncThunk(
  'admin/programs',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllProgramsApi();
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
