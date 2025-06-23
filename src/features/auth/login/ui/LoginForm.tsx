'use client';

import LockIcon from 'public/lock.svg';
import MailIcon from 'public/mail.svg';

import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';

import { useLogin } from '../lib/useLogin';

import styles from './styles.module.scss';

export function LoginForm() {
  const { errors, handleSubmit, isSubmitting, register } = useLogin();
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Вход</h2>
      <Input
        leftIcon={<MailIcon />}
        inputSize={'large'}
        type="email"
        required
        error={errors.email?.message}
        placeholder="Введите почту"
        {...register('email')}
      />
      <Input
        leftIcon={<LockIcon />}
        inputSize={'large'}
        type="password"
        required
        error={errors.password?.message}
        placeholder="Введите пароль"
        {...register('password')}
      />
      <Button
        disabled={isSubmitting}
        size={'large'}
        color={'blue'}
        colorType={'primary'}
      >
        Login
      </Button>
    </form>
  );
}
