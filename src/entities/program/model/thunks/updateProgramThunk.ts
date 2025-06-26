import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateProgramApi } from '../../api/updateProgram';
import { type IProgramUpdateRequest } from '../../model/types';

export const updateProgramsThunk = createAsyncThunk(
  'program/update',
  async (params: IProgramUpdateRequest, { rejectWithValue }) => {
    try {
      return await updateProgramApi(params.id, params.data);
    } catch (error) {
      return rejectWithValue(
        `Обновление программы не выполнено. Ошибка: ${error}`,
      );
    }
  },
);
