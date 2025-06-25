export interface IGroup {
  id: number;
  name: string;
  isActive: boolean;
  schoolYearPeriod: {
    id: number;
    period: string;
  };
  program: {
    id: number;
    name: string;
  };
  teacher: {
    id: number;
    fullName: string;
  };
  studentsCount: number;
  actions: string;
}

export interface IGroupCreate {
  name: string;
  isActive: boolean;
  schoolYearId: number;
  programId: number;
  teacherId: number;
}

export interface IGroupForm {
  name: string;
  isActive: boolean;
  schoolYearId: string;
  programId: string;
  teacherId: string;
}

export interface IGroupUpdateRequest {
  id: number;
  data: IGroupCreate;
}

export interface IGroupsSlice {
  data: IGroup[];
  isLoading: boolean;
  error: string | null;
}
