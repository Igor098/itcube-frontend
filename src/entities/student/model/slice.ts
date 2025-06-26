import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getAllStudentsThunk } from './thunks/getAllThunk';
import type { IStudent, IStudentSlice } from './types';

const initialState: IStudentSlice = {
  data: [],
  isLoading: false,
  error: null,
};

const studentSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudentsThunk.pending, (state: IStudentSlice) => {
        state.isLoading = true;
      })
      .addCase(
        getAllStudentsThunk.fulfilled,
        (state: IStudentSlice, action: PayloadAction<IStudent[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(
        getAllStudentsThunk.rejected,
        (state: IStudentSlice, action: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === 'string'
              ? action.payload
              : 'Неизвестная ошибка';
        },
      );
  },
});

export default studentSlice.reducer;
