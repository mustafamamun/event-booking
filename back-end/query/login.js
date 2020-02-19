import Login from '../models/login';
import uuid from 'uuid';

export const findByEmail = async email => {
  const user = await Login.query().findOne('email', email);
  return user;
};

export const insertUser = async user => {
  await Login.query().insert({ id: uuid.v4(), email, password: hashPassword });
};
