import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITableHeadProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
}

export function TableHead({ children, className, colSpan }: ITableHeadProps) {
  return (
    <th colSpan={colSpan} scope="col" className={clsx(styles.title, className)}>
      {children}
    </th>
  );
}
