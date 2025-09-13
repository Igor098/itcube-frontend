export { getAllSchoolYearsApi } from './api/getSchoolYears';
export { default as schoolYearsReducer } from './model/slice';
export { createSchoolYearThunk } from './model/thunks/createSchoolYearThunk';
export { deleteSchoolYearThunk } from './model/thunks/deleteSchoolYearThunk';
export { getAllSchoolYearsThunk } from './model/thunks/getAllThunk';
export { updateSchoolYearThunk } from './model/thunks/updateSchoolYearThunk';

export { selectSchoolYear } from './model/selectors/schoolYearSelector';
export type {
  ISchoolYear,
  ISchoolYearCreate,
  ISchoolYearForm,
  ISchoolYearSlice,
  ISchoolYearUpdateRequest,
} from './model/types';
