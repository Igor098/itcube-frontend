'use client';

import {
  type FormEvent,
  forwardRef,
  type Ref,
  type TextareaHTMLAttributes,
} from 'react';
import { clsx } from 'clsx';

import { useAutoGrow } from '@/shared/lib/hooks/useAutoGrow';

import styles from './styles.module.scss';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { className, onInput, style, ...rest },
  ref,
) {
  const autoGrow = useAutoGrow<HTMLTextAreaElement>();

  const handleRef: Ref<HTMLTextAreaElement> = (node) => {
    autoGrow.ref.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref && typeof ref === 'object') {
      (ref as { current: HTMLTextAreaElement | null }).current = node;
    }
  };

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    autoGrow.onInput(e);
    onInput?.(e);
  };

  return (
    <textarea
      ref={handleRef}
      className={clsx(styles.textarea, className)}
      onInput={handleInput}
      style={{ ...style, overflow: 'hidden' }}
      {...rest}
    />
  );
});

TextArea.displayName = 'Input';
export default TextArea;
