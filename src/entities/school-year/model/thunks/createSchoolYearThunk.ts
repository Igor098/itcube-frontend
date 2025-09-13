import { createAsyncThunk } from '@reduxjs/toolkit';

import { createSchoolYearApi } from '../../api/createSchoolYear';
import { type ISchoolYearCreate } from '../../model/types';

export const createSchoolYearThunk = createAsyncThunk(
  'schoolYears/create',
  async (schoolYear: ISchoolYearCreate, { rejectWithValue }) => {
    try {
      return await createSchoolYearApi(schoolYear);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
