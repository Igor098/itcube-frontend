'use client';

import { type InputHTMLAttributes } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { useController, useFormContext } from 'react-hook-form';

import type { TSize } from '@/shared/constants/types';
import Input from '@/shared/ui/input';

import styles from './styles.module.scss';

interface FormInputProps<TFieldValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFieldValues>;
  label: string;
  inputSize?: TSize;
  className?: string;
}

export default function FormInput<TFieldValues extends FieldValues>({
  className,
  inputSize = 'large',
  label,
  name,
  ...rest
}: FormInputProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <Input
        id={name}
        inputSize={inputSize}
        error={error?.message}
        className={className}
        {...field}
        {...rest}
      />
    </div>
  );
}
