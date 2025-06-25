export interface ISchoolYear {
  id: number;
  period: string;
  startDate: string;
  endDate: string;
}

export interface ISchoolYearSlice {
  data: ISchoolYear[];
  isLoading: boolean;
  error: string | null;
}
