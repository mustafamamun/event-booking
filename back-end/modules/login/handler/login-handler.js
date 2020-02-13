import {
  encryptPassword,
  matchPassword
} from '../../../services/encryption-service';
import Login from '../../../models/login';
import uuid from 'uuid';
import { isEmpty } from 'lodash';
import ApplicationError from '../../../utils/Error/ApplicationError';
import { createJwtToken } from '../../../services/token-service';

export const registerUser = async ({ email, password }) => {
  const user = await Login.query().findOne('email', email);
  if (!isEmpty(user)) {
    throw new ApplicationError('Bad request', 400);
  }
  const hashPassword = encryptPassword(password);
  await Login.query().insert({ id: uuid.v4(), email, password: hashPassword });
  return { status: 201, message: 'Registration Succeded' };
};

export const loginUser = async ({ email, password }) => {
  const user = await Login.query().findOne('email', email);
  const isValidUser = await matchPassword(user.password, password);
  if (!isValidUser) {
    return new ApplicationError('Wrong credentials', 400);
  }
  const tokenPayload = {
    email: email,
    id: user.id
  };
  const token = createJwtToken(tokenPayload);
  return {
    message: 'Login successfull',
    token: token
  };
};
