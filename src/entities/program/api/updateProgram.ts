import { $api } from '@/shared/api/base';

import { type IProgram, type IProgramCreate } from '../model/types';

export const updateProgramApi = async (
  id: number,
  program: IProgramCreate,
): Promise<IProgram> => {
  const response = await $api.put<IProgram>(`/programs/update/${id}`, program);
  return response.data;
};
