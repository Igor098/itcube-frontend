import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITableRowProps {
  children: ReactNode;
  className?: string;
}

export function TableRow({ children, className }: ITableRowProps) {
  return <tr className={clsx(styles.row, className)}>{children}</tr>;
}
