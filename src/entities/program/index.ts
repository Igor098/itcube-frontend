export { getAllProgramsApi } from './api/getPrograms';
export { type IProgramFilter } from './model/filter';
export { default as programsReducer } from './model/slice';
export { createProgramsThunk } from './model/thunks/createProgramThunk';
export { deleteProgramsThunk } from './model/thunks/deleteProgramThunk';
export { getAllProgramsThunk } from './model/thunks/getAllThunk';
export { updateProgramsThunk } from './model/thunks/updateProgramThunk';
export type {
  IProgram,
  IProgramCreate,
  IProgramForm,
  IProgramSlice,
  IProgramUpdateRequest,
} from './model/types';
