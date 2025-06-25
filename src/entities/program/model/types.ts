export interface IProgram {
  id: number;
  name: string;
  description: string | null;
  durationHours: number;
  minAge: number;
  maxAge: number;
  isActive: boolean;
  groupsCount: number;
}

export interface IProgramSlice {
  data: IProgram[];
  isLoading: boolean;
  error: string | null;
}
