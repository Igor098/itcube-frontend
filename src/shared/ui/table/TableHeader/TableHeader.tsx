import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface ITableHeaderProps {
  className?: string;
  children?: ReactNode;
}

export function TableHeader({ children, className }: ITableHeaderProps) {
  return <thead className={clsx(styles.head, className)}>{children}</thead>;
}
