'use client';

import LockIcon from 'public/lock.svg';
import MailIcon from 'public/mail.svg';
import UserIcon from 'public/user.svg';

import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';

import { useRegister } from '../lib/useRegister';

import styles from './styles.module.scss';

export function RegisterForm() {
  const { errors, handleSubmit, isSubmitting, register } = useRegister();
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Регистрация</h2>
      <Input
        leftIcon={<UserIcon />}
        inputSize={'large'}
        type="text"
        placeholder="Введите имя пользователя"
        required
        error={errors.username?.message}
        {...register('username')}
      />
      <Input
        leftIcon={<MailIcon />}
        inputSize={'large'}
        type="email"
        placeholder="Введите почту"
        required
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        leftIcon={<LockIcon />}
        inputSize={'large'}
        type="password"
        placeholder="Введите пароль"
        required
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        leftIcon={<LockIcon />}
        inputSize={'large'}
        type="password"
        placeholder="Повторите пароль"
        required
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <Button
        disabled={isSubmitting}
        size="large"
        color="blue"
        colorType="primary"
      >
        Регистрация
      </Button>
    </form>
  );
}
