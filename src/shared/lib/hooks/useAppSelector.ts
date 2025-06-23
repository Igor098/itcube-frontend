import { type TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '@/app/providers/store'; // или '@/shared/lib/store' — откуда у тебя типы

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
