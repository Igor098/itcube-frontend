import { clsx } from 'clsx';

import { type TSize } from '@/shared/constants/types';

import styles from './styles.module.scss';

export interface IOption<T> {
  label: string;
  value: T;
}

interface ISelectProps<T> {
  options: IOption<T>[];
  value: T;
  onChange: (value: T) => void;
  selectSize: TSize;
  className?: string;
}

export default function Select<T>({
  className,
  onChange,
  options,
  selectSize,
  value,
}: ISelectProps<T>) {
  return (
    <select
      value={String(value)}
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
    >
      {options.map((option) => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
