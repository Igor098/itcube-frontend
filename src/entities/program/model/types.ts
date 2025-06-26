export interface IProgram {
  id: number;
  name: string;
  description: string;
  durationHours: number;
  minAge: number;
  maxAge: number;
  isActive: boolean;
  groupsCount: number;
  actions: string;
}

export interface IProgramCreate {
  name: string;
  description: string;
  durationHours: number;
  minAge: number;
  maxAge: number;
  isActive: boolean;
}

export interface IProgramForm {
  name: string;
  description: string;
  durationHours: string;
  minAge: string;
  maxAge: string;
  isActive: boolean;
}

export interface IProgramUpdateRequest {
  id: number;
  data: IProgramCreate;
}

export interface IProgramSlice {
  data: IProgram[];
  isLoading: boolean;
  error: string | null;
}
