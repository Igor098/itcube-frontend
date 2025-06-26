'use client';

import type { ComponentPropsWithoutRef } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import { ru } from 'date-fns/locale';
import Calendar from 'public/icons/calendar.svg';

import DatepickerInputWrapper from '@/shared/ui/datepicker-input-wrapper';

import styles from './styles.module.scss';

type ReactDatePickerProps = ComponentPropsWithoutRef<typeof DatePicker>;

interface FormDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  dateFormat?: string;
}

export default function FormDatePicker({
  className,
  dateFormat = 'dd.MM.yyyy',
  label,
  name,
  placeholder = 'Выберите дату',
  required,
}: FormDatePickerProps) {
  const { control } = useFormContext();

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const datepickerProps = {
            id: name,
            selected: (field.value as Date | null) ?? null,
            onChange: field.onChange,
            placeholderText: placeholder,
            dateFormat,
            showMonthYearDropdown: true,
            calendarClassName: styles.calendar,
            popperClassName: styles.popper,
            customInput: (
              <DatepickerInputWrapper
                required={required}
                className={className}
                error={fieldState.error?.message}
                leftIcon={<Calendar size={16} />}
              />
            ),
          } as unknown as ReactDatePickerProps;

          return (
            <>
              <DatePicker
                className={styles.picker}
                locale="ru"
                minDate={new Date(1980, 0, 1)}
                maxDate={new Date(2030, 11, 31)}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={50}
                showPopperArrow={false}
                {...datepickerProps}
              />
              {fieldState.error?.message && (
                <p className={styles.errorText}>{fieldState.error.message}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );
}
