import { $api } from '@/shared/api/base';

import { type IUser } from '../model/types';

export const getMeApi = async () => {
  const response = await $api.get<IUser>('/users/me');
  return response.data;
};
