'use client';

import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './styles.module.scss';

interface IProps {
  className?: string;
  disabled?: boolean;
  label: string;
  link?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export const DropdownItem = ({
  className,
  disabled,
  icon,
  label,
  link,
  onClick,
}: IProps) => {
  const baseClass = clsx(styles.item, className, {
    [styles.disabled]: disabled,
  });

  const content = (
    <span className={styles.inner}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </span>
  );

  if (link) {
    return (
      <Link href={link} className={baseClass}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={baseClass} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  return <span className={baseClass}>{content}</span>;
};
