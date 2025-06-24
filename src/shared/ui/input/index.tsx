import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

import { type TSize } from '@/shared/constants/types';

import styles from './styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  inputClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  inputSize?: TSize;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      error,
      inputClassName,
      inputSize,
      leftIcon,
      rightIcon,
      ...rest
    },
    ref,
  ) => (
    <>
      <div
        className={clsx(
          styles.wrapper,
          styles[`wrapper_size__${inputSize}`],
          error && styles.wrapper_error,
          className,
        )}
      >
        {leftIcon && (
          <span
            className={clsx(
              styles.left_icon,
              styles[`left_icon_size__${inputSize}`],
            )}
          >
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          className={clsx(styles.input, inputClassName)}
          {...rest}
        />
        {rightIcon && (
          <span
            className={clsx(
              styles.right_icon,
              styles[`right_icon_size__${inputSize}`],
            )}
          >
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </>
  ),
);

Input.displayName = 'Input';

export default Input;
