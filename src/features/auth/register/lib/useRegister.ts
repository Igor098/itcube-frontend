'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/shared/lib/hooks';

import { registerThunk } from '../../model/thunks/registerThunk';
import { type IRegisterPayload } from '../../model/types';

import { registerSchema } from './validation';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<IRegisterPayload>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: IRegisterPayload) => {
    const result = await dispatch(registerThunk(data));
    if (registerThunk.fulfilled.match(result)) {
      router.push('/');
    }
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
