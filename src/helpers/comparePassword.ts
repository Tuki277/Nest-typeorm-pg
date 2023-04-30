import * as bcrypt from 'bcrypt';

export const comparePassword = async (
  passwordInput: string,
  passwordQuery: string,
) => {
  return bcrypt.compare(passwordInput, passwordQuery);
};
