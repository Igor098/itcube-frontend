export { type IGroupFilter } from './model/filter';
export { default as groupsReducer } from './model/slice';
export { createGroupThunk } from './model/thunks/createGroupThunk';
export { deleteGroupThunk } from './model/thunks/deleteGroupThunk';
export { getAllGroupsThunk } from './model/thunks/getAllThunk';
export { updateGroupThunk } from './model/thunks/updateGroupThunk';
export type {
  IGroup,
  IGroupCreate,
  IGroupsSlice,
  IGroupUpdateRequest,
} from './model/types';
