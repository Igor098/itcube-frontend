import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className }: IProps) {
  return <div className={clsx(styles.tabs_list, className)}>{children}</div>;
}
