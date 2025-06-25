import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getAllProgramsThunk } from './thunks/getAllThunk';
import type { IProgram, IProgramSlice } from './types';

const initialState: IProgramSlice = {
  data: [],
  isLoading: false,
  error: null,
};

const programsSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProgramsThunk.pending, (state: IProgramSlice) => {
        state.isLoading = true;
      })
      .addCase(
        getAllProgramsThunk.fulfilled,
        (state: IProgramSlice, action: PayloadAction<IProgram[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(
        getAllProgramsThunk.rejected,
        (state: IProgramSlice, action: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === 'string'
              ? action.payload
              : 'Неизвестная ошибка';
        },
      );
  },
});

export default programsSlice.reducer;
