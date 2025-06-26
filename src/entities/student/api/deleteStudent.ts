import { $api } from '@/shared/api/base';

export const deleteStudentApi = async (id: number): Promise<void> => {
  const response = await $api.delete(`/students/delete/${id}`);
  return response.data;
};
