import { $api } from '@/shared/api/base';

import type { IStudent, IStudentCreate } from '../model/types';

export const createStudentsApi = async (
  student: IStudentCreate,
): Promise<IStudent[]> => {
  const response = await $api.post<IStudent[]>('/students/create', student);
  return response.data;
};
