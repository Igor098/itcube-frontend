import {
  type ChangeEvent,
  type FocusEvent,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react';

import Input from '@/shared/ui/input';

interface DatepickerInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  className?: string;
  error?: string;
  leftIcon?: ReactNode;
}

const DatepickerInputWrapper = forwardRef<
  HTMLInputElement,
  DatepickerInputProps
>(function DatepickerInputWrapper(
  {
    className,
    error,
    leftIcon,
    name,
    onBlur,
    onChange,
    onClick,
    required,
    value,
    ...rest
  },
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Input
      ref={ref}
      value={value}
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      required={required}
      error={error}
      className={className}
      leftIcon={leftIcon}
      inputSize={'small'}
      {...rest}
    />
  );
});

export default DatepickerInputWrapper;
