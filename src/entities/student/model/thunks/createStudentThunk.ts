import { createAsyncThunk } from '@reduxjs/toolkit';

import { createStudentsApi } from '../../api/createStudent';
import { type IStudentCreate } from '../../model/types';

export const createStudentThunk = createAsyncThunk(
  'student/create',
  async (student: IStudentCreate, { rejectWithValue }) => {
    try {
      return await createStudentsApi(student);
    } catch (error) {
      return rejectWithValue(`Не удалось создать ученика. Ошибка: ${error}`);
    }
  },
);
