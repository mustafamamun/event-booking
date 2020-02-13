import jwt from 'jsonwebtoken';
const secretKey = process.env.api_secret || 'MySuperSecretKey';

export const createJwtToken = payload => {
  return jwt.sign(payload, secretKey, { expiresIn: 36000 });
};

export const verifyToken = token => {
  return jwt.verify(token, secretKey);
};
