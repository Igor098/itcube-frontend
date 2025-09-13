import { createAsyncThunk } from '@reduxjs/toolkit';

import { deleteSchoolYearApi } from '../../api/deleteSchoolYear';

export const deleteSchoolYearThunk = createAsyncThunk(
  'schoolYears/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      return await deleteSchoolYearApi(id);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);