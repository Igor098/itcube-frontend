import { $api } from '@/shared/api/base';

export const logoutApi = async () => {
  const response = await $api.post('/auth/logout');
  return response.data;
};
