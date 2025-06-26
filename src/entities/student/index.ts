export { createStudentsApi } from './api/createStudent';
export { deleteStudentApi } from './api/deleteStudent';
export { getAllStudentsApi } from './api/getStudents';
export { updateStudentsApi } from './api/updateStudent';
export { type IStudentFilter } from './model/filter';
export { default as studentReducer } from './model/slice';
export { createStudentThunk } from './model/thunks/createStudentThunk';
export { deleteStudentThunk } from './model/thunks/deleteStudentThunk';
export { getAllStudentsThunk } from './model/thunks/getAllThunk';
export { updateStudentThunk } from './model/thunks/updateStudentThunk';
export type {
  IStudent,
  IStudentCreate,
  IStudentForm,
  IStudentSlice,
  IStudentUpdateResponse,
} from './model/types';
