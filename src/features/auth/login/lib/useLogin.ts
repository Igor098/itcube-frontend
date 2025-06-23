import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { loginThunk } from '../../model/thunks/loginThunk';
import { type ILoginPayload } from '../../model/types';

import { loginSchema } from './validation';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<ILoginPayload>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ILoginPayload) => {
    const result = await dispatch(loginThunk(data));
    if (loginThunk.fulfilled.match(result)) {
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
