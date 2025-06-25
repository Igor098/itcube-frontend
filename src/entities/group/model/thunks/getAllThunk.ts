import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllGroupsApi } from '../../api/getGroups';
import type { IGroupFilter } from '../filter';

export const getAllGroupsThunk = createAsyncThunk(
  'admin/groups',
  async (params: IGroupFilter, { rejectWithValue }) => {
    try {
      return await getAllGroupsApi(params);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
