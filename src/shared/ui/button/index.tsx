import { type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

type TSize = 'small' | 'medium' | 'large';
type TColor = 'blue' | 'gray';
type TColorType = 'primary' | 'secondary';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSize;
  color?: TColor;
  colorType?: TColorType;
  isUpperCase?: boolean;
  className?: string;
}

export default function Button({
  children,
  className,
  color = 'blue',
  colorType = 'primary',
  disabled,
  isUpperCase,
  size = 'medium',
  ...rest
}: IButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button_${color}__${colorType}`],
        styles[`button_size__${size}`],
        isUpperCase && styles.uppercase,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
