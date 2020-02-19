import jwt from 'jsonwebtoken';
const secretKey = process.env.api_secret || 'MySuperSecretKey';

export const createJwtToken = payload => {
  return jwt.sign(payload, secretKey, { expiresIn: 36000 });
};

export const verifyToken = token => {
  return jwt.verify(token, secretKey);
};

export const socialAuthTokenGenerator = async (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: 'User Not Authenticated' });
  }
  const token = createJwtToken(req.user);
  return res.status(200).json({ message: 'Login succeded', token: token });
};
