export interface IStudent {
  id: number;
  fullName: string;
  birthDate: string;
  age: number;
  hasAccount: boolean;
  actions: string;
}

export interface IStudentForm {
  fullName: string;
  birthDate: string;
  age: string;
  hasAccount: boolean;
}

export interface IStudentUpdateResponse {
  id: number;
  data: IStudentCreate;
}

export interface IStudentCreate {
  fullName: string;
  birthDate: Date | string;
  hasAccount: boolean;
}

export interface IStudentSlice {
  data: IStudent[];
  isLoading: boolean;
  error: string | null;
}
