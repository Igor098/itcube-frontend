import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

type TSize = 'small' | 'medium' | 'large';
type TColor = 'blue' | 'gray';
type TColorType = 'primary' | 'secondary';

interface IProps {
  size: TSize;
  color: TColor;
  colorType: TColorType;
  children: ReactNode;
  disabled?: boolean;
  isUpperCase?: boolean;
}

export default function Button({
  children,
  color,
  colorType,
  disabled,
  isUpperCase,
  size,
}: IProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button_${color}__${colorType}`],
        styles[`button_size__${size}`],
        isUpperCase && styles.uppercase,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
