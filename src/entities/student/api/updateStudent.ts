import { $api } from '@/shared/api/base';

import type { IStudent, IStudentCreate } from '../model/types';

export const updateStudentsApi = async (
  id: number,
  student: IStudentCreate,
): Promise<IStudent[]> => {
  const response = await $api.put<IStudent[]>(
    `/students/update/${id}`,
    student,
  );
  return response.data;
};
