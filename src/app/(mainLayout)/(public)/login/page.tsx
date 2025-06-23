import type { Metadata } from 'next';
import AuthWidget from 'src/widgets/auth';

import { LoginForm } from '@/features/auth/login';

export const metadata: Metadata = {
  title: 'IT Куб | Вход',
};

export default function LoginPage() {
  return (
    <AuthWidget>
      <LoginForm />
    </AuthWidget>
  );
}
