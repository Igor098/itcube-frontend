import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateSchoolYearApi } from '../../api/updateSchoolYear';
import { type ISchoolYearUpdateRequest } from '../../model/types';

export const updateSchoolYearThunk = createAsyncThunk(
  'schoolYears/update',
  async (params: ISchoolYearUpdateRequest, { rejectWithValue }) => {
    try {
      return await updateSchoolYearApi(params.id, params.data);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
