import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateStudentsApi } from '../../api/updateStudent';
import { type IStudentUpdateResponse } from '../../model/types';

export const updateStudentThunk = createAsyncThunk(
  'student/update',
  async (payload: IStudentUpdateResponse, { rejectWithValue }) => {
    try {
      return await updateStudentsApi(payload.id, payload.data);
    } catch (error) {
      return rejectWithValue(`Не удалось обновить ученика. Ошибка: ${error}`);
    }
  },
);
