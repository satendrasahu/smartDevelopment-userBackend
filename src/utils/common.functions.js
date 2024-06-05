import jwt from 'jsonwebtoken';
export const generateToken = (userId,expiresIn) => {
  const token = jwt.sign({ _id:userId }, process.env.SECREAT_KEY, { expiresIn: expiresIn || '1h' });
  return token;
};