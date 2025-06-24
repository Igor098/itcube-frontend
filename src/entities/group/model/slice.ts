import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getAllGroupsThunk } from './thunks/getAllThunk';
import type { IGroup, IGroupsSlice } from './types';

const initialState: IGroupsSlice = {
  data: [],
  isLoading: false,
  error: null,
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGroupsThunk.pending, (state: IGroupsSlice) => {
        state.isLoading = true;
      })
      .addCase(
        getAllGroupsThunk.fulfilled,
        (state: IGroupsSlice, action: PayloadAction<IGroup[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(
        getAllGroupsThunk.rejected,
        (state: IGroupsSlice, action: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === 'string'
              ? action.payload
              : 'Неизвестная ошибка';
        },
      );
  },
});

export default groupsSlice.reducer;
