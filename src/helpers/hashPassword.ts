import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR));
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};
