import { $api } from '@/shared/api/base';

export const deleteSchoolYearApi = async (id: number): Promise<void> => {
  const response = await $api.delete(`/school-years/delete/${id}`);
  return response.data;
};
