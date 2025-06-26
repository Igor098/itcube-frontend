'use client';

import type { FieldValues, Path } from 'react-hook-form';
import { useController, useFormContext } from 'react-hook-form';

import { type TSize } from '@/shared/constants/types';
import type { IOption } from '@/shared/ui/select';
import Select from '@/shared/ui/select';

import styles from './styles.module.scss';

interface FormSelectProps<TFieldValues extends FieldValues, TOptionValue> {
  name: Path<TFieldValues>;
  label?: string;
  placeholder?: string;
  options: IOption<TOptionValue>[];
  selectSize: TSize;
  className?: string;
}

export default function FormSelect<
  TFieldValues extends FieldValues,
  TOptionValue,
>({
  className,
  label,
  name,
  options,
  placeholder,
  selectSize,
}: FormSelectProps<TFieldValues, TOptionValue>) {
  const { control } = useFormContext<TFieldValues>();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        selectSize={selectSize}
        className={className}
      />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
}
