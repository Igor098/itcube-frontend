import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getAllTeachersThunk } from './thunks/getAllThunk';
import type { ITeacher, ITeacherSlice } from './types';

const initialState: ITeacherSlice = {
  data: [],
  isLoading: false,
  error: null,
};

const teacherDetailsSlice = createSlice({
  name: 'teacherDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeachersThunk.pending, (state: ITeacherSlice) => {
        state.isLoading = true;
      })
      .addCase(
        getAllTeachersThunk.fulfilled,
        (state: ITeacherSlice, action: PayloadAction<ITeacher[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(
        getAllTeachersThunk.rejected,
        (state: ITeacherSlice, action: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === 'string'
              ? action.payload
              : 'Неизвестная ошибка';
        },
      );
  },
});

export default teacherDetailsSlice.reducer;
