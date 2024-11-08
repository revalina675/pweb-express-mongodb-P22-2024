import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User, { IUser } from '../models/user.model';

dotenv.config();

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const validatePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || '', { expiresIn: '1h' });
};
