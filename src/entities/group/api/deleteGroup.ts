import { $api } from '@/shared/api/base';

export const deleteGroupApi = async (id: number): Promise<void> => {
  await $api.delete(`/groups/delete/${id}`);
};
