export interface ISchoolYear {
  id: number;
  period: string;
  startDate: string;
  endDate: string;
  actions: string;
}

export interface ISchoolYearCreate {
  period: string;
  startDate: string | Date;
  endDate: string | Date;
}

export interface ISchoolYearUpdateRequest {
  id: number;
  data: ISchoolYearCreate;
}

export interface ISchoolYearForm {
  schoolYearPeriod: string;
  schoolYearStartDate: string | Date;
  schoolYearEndDate: string | Date;
}

export interface ISchoolYearSlice {
  data: ISchoolYear[];
  isLoading: boolean;
  error: string | null;
}
