import { createAsyncThunk } from '@reduxjs/toolkit';

import { deleteProgramApi } from '../../api/deleteProgram';

export const deleteProgramsThunk = createAsyncThunk(
  'program/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      return await deleteProgramApi(id);
    } catch (error) {
      return rejectWithValue(`Не удалось создать программу. Ошибка: ${error}`);
    }
  },
);
