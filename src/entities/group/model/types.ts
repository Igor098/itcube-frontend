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

export interface IGroupsSlice {
  data: IGroup[];
  isLoading: boolean;
  error: string | null;
}
