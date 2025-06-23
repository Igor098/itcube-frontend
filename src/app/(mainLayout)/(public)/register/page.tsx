import type { Metadata } from 'next';
import AuthWidget from 'src/widgets/auth';

import { RegisterForm } from '@/features/auth';

export const metadata: Metadata = {
  title: 'IT Куб | Регистрация',
};

export default function LoginPage() {
  return (
    <AuthWidget isRegister={true}>
      <RegisterForm />
    </AuthWidget>
  );
}
