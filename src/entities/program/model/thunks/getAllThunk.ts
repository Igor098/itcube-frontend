import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllProgramsApi } from '../../api/getPrograms';
import { type IProgramFilter } from '../filter';

export const getAllProgramsThunk = createAsyncThunk(
  'admin/programs',
  async (filters: IProgramFilter, { rejectWithValue }) => {
    try {
      return await getAllProgramsApi(filters);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
