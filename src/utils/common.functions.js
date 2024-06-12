import jwt from 'jsonwebtoken';
export const generateToken = (tokenData,expiresIn) => {
  const token = jwt.sign(tokenData, process.env.SECREAT_KEY, { expiresIn: expiresIn || '1h' });
  return token;
};