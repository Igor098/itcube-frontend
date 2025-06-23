import { messages } from './messages';
import { regex } from './regex';

export const rules = {
  required: {
    required: true,
    message: messages.required,
  },
  login: {
    pattern: regex.login,
    message: messages.notLogin,
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
  loginOrEmail: {
    pattern: regex.loginOrEmail,
    message: messages.loginOrEmail,
  },
  fullName: {
    pattern: regex.fullName,
    message: messages.fullName,
  },
};
