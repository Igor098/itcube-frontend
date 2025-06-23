import { type PayloadAction } from '@reduxjs/toolkit';

import type { IAuthSlice, IUser } from './types';

export const handlePending = (state: IAuthSlice) => {
  state.isLoading = true;
  state.error = null;
};

export const handleAuthenticated = (
  state: IAuthSlice,
  action: PayloadAction<IUser>,
) => {
  state.isLoading = false;
  state.user = action.payload;
  state.isAuth = true;
  state.error = null;
};

export const handleUnauthenticated = (state: IAuthSlice) => {
  state.isLoading = false;
  state.user = null;
  state.isAuth = false;
  state.error = null;
};

export const handleRejected = (
  state: IAuthSlice,
  action: PayloadAction<string | unknown>,
) => {
  state.isLoading = false;
  state.error =
    typeof action.payload === 'string' ? action.payload : 'Неизвестная ошибка';
  state.user = null;
  state.isAuth = false;
};
