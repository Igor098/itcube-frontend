import { $api } from '@/shared/api/base';

export const deleteProgramApi = async (id: number): Promise<void> => {
  const response = await $api.delete(`/programs/delete/${id}`);
  return response.data;
};
