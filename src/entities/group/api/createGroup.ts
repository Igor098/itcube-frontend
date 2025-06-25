import { $api } from '@/shared/api/base';

import { type IGroup, type IGroupCreate } from '../model/types';

export const createGroupApi = async (data: IGroupCreate): Promise<IGroup> => {
  const response = await $api.post<IGroup>('/groups/create', data);
  return response.data;
};
