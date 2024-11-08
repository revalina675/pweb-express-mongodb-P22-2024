import { Request, Response } from 'express';
import User from '../models/user.model';
import { hashPassword, validatePassword, generateToken } from '../services/auth.service';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: { username, email }
    });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: 'Error registering user', data: {} });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ status: 'failed', message: 'User not found', data: {} });
      return;
    }
    const isPasswordValid = await validatePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ status: 'failed', message: 'Invalid credentials', data: {} });
      return;
    }
    const token = generateToken(user);
    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: { token }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error logging in', data: {} });
  }
};
