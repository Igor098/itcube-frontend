import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITableBodyProps {
  children: ReactNode;
  className?: string;
}

export function TableBody({ children, className }: ITableBodyProps) {
  return <tbody className={clsx(styles.body, className)}>{children}</tbody>;
}
