import { $api } from '@/shared/api/base';

import { type IProgram } from '../model/types';

export const getAllProgramsApi = async (): Promise<IProgram[]> => {
  const response = await $api.get<IProgram[]>('/programs/all');
  return response.data;
};
