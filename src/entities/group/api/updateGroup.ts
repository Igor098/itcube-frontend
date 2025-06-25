import { $api } from '@/shared/api/base';

import { type IGroup, type IGroupCreate } from '../model/types';

export const updateGroupApi = async (
  id: number,
  data: IGroupCreate,
): Promise<IGroup> => {
  const response = await $api.put<IGroup>(`/groups/update/${id}`, data);
  return response.data;
};
