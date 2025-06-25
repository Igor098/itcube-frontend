import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateGroupApi } from '../../api/updateGroup';
import { type IGroupUpdateRequest } from '../../model/types';

export const updateGroupThunk = createAsyncThunk(
  'groups/update',
  async (params: IGroupUpdateRequest, { rejectWithValue }) => {
    try {
      return await updateGroupApi(params.id, params.data);
    } catch (error) {
      return rejectWithValue(`Неверные учетные данные. Ошибка: ${error}`);
    }
  },
);
