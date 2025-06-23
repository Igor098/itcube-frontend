import { type AxiosResponse } from 'axios';

import { $api } from '@/shared/api/base';

import type { ILoginPayload, IUser } from '../model/types';

export const loginApi = async (payload: ILoginPayload) => {
  const response = await $api.post<IUser>('/auth/login', payload);
  return response.data;
};
