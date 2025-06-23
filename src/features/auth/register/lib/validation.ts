import { z } from 'zod';

import { rules } from '@/shared/constants/rules';

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(rules.username.minLength, rules.username.message)
      .nonempty(rules.required.message)
      .regex(rules.username.pattern, rules.username.message),
    email: z
      .string()
      .nonempty(rules.required.message)
      .regex(rules.email.pattern, rules.email.message),
    password: z
      .string()
      .min(rules.password.minLength, rules.password.message)
      .nonempty(rules.required.message)
      .regex(rules.password.pattern, rules.password.message),
    confirmPassword: z.string().nonempty(rules.required.message),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: rules.confirmPassword.message,
  });
