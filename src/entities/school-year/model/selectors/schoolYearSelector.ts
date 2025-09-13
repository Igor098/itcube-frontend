import { type RootState } from '@/app/providers/store';

export const selectSchoolYear = (state: RootState) => state.schoolYears;
