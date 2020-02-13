import bcrypt from 'bcryptjs';

export const encryptPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const matchPassword = async (dbPass, userPass) => {
  const isMatch = await bcrypt.compare(userPass, dbPass);
  return isMatch;
};
