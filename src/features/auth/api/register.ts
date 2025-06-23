import { $api } from '@/shared/api/base';

import { type IRegisterPayload, type IUser } from '../model/types';

export const registerApi = async (payload: IRegisterPayload) => {
  const response = await $api.post<IUser>('/auth/register', payload);
  return response.data;
};
