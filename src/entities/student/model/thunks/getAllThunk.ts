import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllStudentsApi } from '../../api/getStudents';
import { type IStudentFilter } from '../filter';

export const getAllStudentsThunk = createAsyncThunk(
  'admin/students',
  async (filters: IStudentFilter, { rejectWithValue }) => {
    try {
      return await getAllStudentsApi(filters);
    } catch (error) {
      return rejectWithValue(
        `Произошла ошибка при загрузке учеников. Ошибка: ${error}`,
      );
    }
  },
);
