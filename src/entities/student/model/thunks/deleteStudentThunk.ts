import { createAsyncThunk } from '@reduxjs/toolkit';

import { deleteStudentApi } from '../../api/deleteStudent';

export const deleteStudentThunk = createAsyncThunk(
  'students/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      return await deleteStudentApi(id);
    } catch (error) {
      return rejectWithValue(
        `Произошла ошибка при удалении ученика. Ошибка: ${error}`,
      );
    }
  },
);
