export interface ITeacher {
  id: number;
  specialization: string;
  employee: {
    id: number;
    fullName: string;
  };
}

export interface ITeacherSlice {
  data: ITeacher[];
  isLoading: boolean;
  error?: string | null;
}
