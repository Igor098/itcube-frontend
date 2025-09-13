import { $api } from '@/shared/api/base';

import { type ISchoolYear, type ISchoolYearCreate } from '../model/types';

export const updateSchoolYearApi = async (
  id: number,
  schoolYear: ISchoolYearCreate,
): Promise<ISchoolYear[]> => {
  const response = await $api.put<ISchoolYear[]>(
    `/school-years/update/${id}`,
    schoolYear,
  );
  return response.data;
};
