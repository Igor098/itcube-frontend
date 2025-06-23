import { z } from 'zod';

import { rules } from '@/shared/constants/rules';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty(rules.required.message)
    .regex(rules.email.pattern, rules.email.message),
  password: z
    .string()
    .nonempty(rules.required.message)
    .min(rules.password.minLength, rules.password.message)
    .regex(rules.password.pattern, rules.password.message),
});
