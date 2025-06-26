import { $api } from '@/shared/api/base';

import { type IStudentFilter } from '../model/filter';
import { type IStudent } from '../model/types';

export const getAllStudentsApi = async (
  filters?: IStudentFilter,
): Promise<IStudent[]> => {
  const response = await $api.get<IStudent[]>('/students/filter', {
    params: filters,
  });
  return response.data;
};
