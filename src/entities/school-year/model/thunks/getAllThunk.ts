import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllSchoolYearsApi } from '../../api/getSchoolYears';

export const getAllSchoolYearsThunk = createAsyncThunk(
  'admin/schoolYears',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllSchoolYearsApi();
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
