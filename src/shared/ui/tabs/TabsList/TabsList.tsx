import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

type IProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
};

export function TabsList({
  children,
  className,
  orientation = 'horizontal',
}: IProps) {
  return (
    <div
      className={clsx(styles.tabs_list, className)}
      role="tablist"
      aria-orientation={orientation}
      data-orientation={orientation}
    >
      {children}
    </div>
  );
}
