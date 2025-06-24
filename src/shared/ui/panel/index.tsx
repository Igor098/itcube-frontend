import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface IPanelProps {
  className?: string;
  children: ReactNode;
}

export default function Panel({ children, className }: IPanelProps) {
  return <div className={clsx(styles.base_panel, className)}>{children}</div>;
}
