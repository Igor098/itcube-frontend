import { $api } from '@/shared/api/base';

import { type IProgram, type IProgramCreate } from '../model/types';

export const createProgramApi = async (
  program: IProgramCreate,
): Promise<IProgram[]> => {
  const response = await $api.post<IProgram[]>('/programs/create', program);
  return response.data;
};
