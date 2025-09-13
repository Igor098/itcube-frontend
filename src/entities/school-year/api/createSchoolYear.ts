import { $api } from '@/shared/api/base';

import { type ISchoolYear, type ISchoolYearCreate } from '../model/types';

export const createSchoolYearApi = async (
  schoolYear: ISchoolYearCreate,
): Promise<ISchoolYear[]> => {
  const response = await $api.post<ISchoolYear[]>(
    '/school-years/create',
    schoolYear,
  );
  return response.data;
};
