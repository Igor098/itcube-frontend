import type { ReactNode } from 'react';

export interface IColumn<T> {
  key: keyof T;
  title: string;
  render?: (item: T) => ReactNode;
}

export interface IDataTableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
}
