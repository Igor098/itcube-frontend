import { type SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { type TSize } from '@/shared/constants/types';

import styles from './styles.module.scss';

export interface IOption<T> {
  label: string;
  value: T;
}

interface ISelectProps<T>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  options: IOption<T>[];
  onChange: (value: T) => void;
  value: T;
  selectSize: TSize;
  placeholder?: string;
  className?: string;
}

export default function Select<T>({
  className,
  onChange,
  options,
  placeholder,
  selectSize,
  value,
  ...rest
}: ISelectProps<T>) {
  return (
    <select
      value={value === undefined ? '' : String(value)}
      className={clsx(
        styles.select,
        styles[`select_size__${selectSize}`],
        className,
      )}
      onChange={(e) => {
        const selected = e.target.value;
        const matched = options.find((o) => String(o.value) === selected);
        if (matched) {
          onChange(matched.value);
        }
      }}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
