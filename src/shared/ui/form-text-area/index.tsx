'use client';

import { type TextareaHTMLAttributes } from 'react';
import {
  type FieldValues,
  type Path,
  useController,
  useFormContext,
} from 'react-hook-form';

import TextArea from '@/shared/ui/textarea';

import styles from './styles.module.scss';

type FormTextareaProps<TFieldValues extends FieldValues> =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: Path<TFieldValues>;
    label?: string;
    className?: string;
  };

export default function FormTextArea<TFieldValues extends FieldValues>({
  className,
  label,
  name,
  ...rest
}: FormTextareaProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <TextArea
        id={name}
        {...field}
        {...rest}
        className={`${className ?? ''} ${error ? styles.error : ''}`}
      />
      {error?.message && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
}
