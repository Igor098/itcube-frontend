import { type FormEvent, useCallback, useEffect, useRef } from 'react';

export function useAutoGrow<T extends HTMLTextAreaElement>() {
  const ref = useRef<T | null>(null);

  const updateHeight = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  const handleInput = useCallback(
    (e: FormEvent<T>) => {
      updateHeight();
    },
    [updateHeight],
  );

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  return {
    ref,
    onInput: handleInput,
    updateHeight,
  };
}
