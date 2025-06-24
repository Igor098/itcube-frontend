import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className }: ITableProps) {
  return <table className={clsx(styles.table, className)}>{children}</table>;
}
