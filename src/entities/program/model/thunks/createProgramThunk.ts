import { createAsyncThunk } from '@reduxjs/toolkit';

import { createProgramApi } from '../../api/createProgram';
import { type IProgramCreate } from '../../model/types';

export const createProgramsThunk = createAsyncThunk(
  'program/create',
  async (program: IProgramCreate, { rejectWithValue }) => {
    try {
      return await createProgramApi(program);
    } catch (error) {
      return rejectWithValue(`Не удалось создать ученика. Ошибка: ${error}`);
    }
  },
);
