import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITableCellProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
}

export function TableCell({ children, className, colSpan }: ITableCellProps) {
  return (
    <td colSpan={colSpan} role="row" className={clsx(styles.cell, className)}>
      {children}
    </td>
  );
}
