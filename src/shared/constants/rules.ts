import { messages } from './messages';
import { regex } from './regex';

export const rules = {
  required: {
    required: true,
    message: messages.required,
  },
  username: {
    pattern: regex.username,
    message: messages.notUsername,
    minLength: 3,
  },
  email: {
    pattern: regex.email,
    message: messages.notEmail,
  },
  password: {
    pattern: regex.password,
    message: messages.notPassword,
    minLength: 8,
  },
  confirmPassword: {
    message: messages.passwordsNotMatch,
  },
};
