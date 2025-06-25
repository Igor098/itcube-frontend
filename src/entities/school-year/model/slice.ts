import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getAllSchoolYearsThunk } from './thunks/getAllThunk';
import type { ISchoolYear, ISchoolYearSlice } from './types';

const initialState: ISchoolYearSlice = {
  data: [],
  isLoading: false,
  error: null,
};

const schoolYearsSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSchoolYearsThunk.pending, (state: ISchoolYearSlice) => {
        state.isLoading = true;
      })
      .addCase(
        getAllSchoolYearsThunk.fulfilled,
        (state: ISchoolYearSlice, action: PayloadAction<ISchoolYear[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(
        getAllSchoolYearsThunk.rejected,
        (state: ISchoolYearSlice, action: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === 'string'
              ? action.payload
              : 'Неизвестная ошибка';
        },
      );
  },
});

export default schoolYearsSlice.reducer;
