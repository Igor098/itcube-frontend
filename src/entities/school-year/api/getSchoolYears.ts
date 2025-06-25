import { $api } from '@/shared/api/base';

import { type ISchoolYear } from '../model/types';

export const getAllSchoolYearsApi = async (): Promise<ISchoolYear[]> => {
  const response = await $api.get<ISchoolYear[]>('/school-years/all');
  return response.data;
};
