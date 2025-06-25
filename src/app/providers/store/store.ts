import { configureStore } from '@reduxjs/toolkit';

import { groupsReducer } from '@/entities/group';
import { programsReducer } from '@/entities/program';
import { teachersReducer } from '@/entities/teacher';
import { authReducer } from '@/features/auth';
import { schoolYearsReducer } from '@/entities/school-year';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupsReducer,
    teacherDetails: teachersReducer,
    programs: programsReducer,
    schoolYears: schoolYearsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
