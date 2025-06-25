import { $api } from '@/shared/api/base';

import { type ITeacher } from '../model/types';

export const getAllTeachersApi = async (): Promise<ITeacher[]> => {
  const response = await $api.get<ITeacher[]>('/teacher-details/all');
  return response.data;
};
