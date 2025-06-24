import { $api } from '@/shared/api/base';

import { type IGroupFilter } from '../model/filter';
import { type IGroup } from '../model/types';

export const getAllGroupsApi = async (
  params?: IGroupFilter,
): Promise<IGroup[]> => {
  const response = await $api.get<IGroup[]>('/groups/by-filters', { params });
  return response.data;
};
