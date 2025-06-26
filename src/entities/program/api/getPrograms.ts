import { $api } from '@/shared/api/base';

import { type IProgramFilter } from '../model/filter';
import { type IProgram } from '../model/types';

export const getAllProgramsApi = async (
  filters?: IProgramFilter,
): Promise<IProgram[]> => {
  const response = await $api.get<IProgram[]>('/programs/filter', {
    params: filters,
  });
  return response.data;
};
