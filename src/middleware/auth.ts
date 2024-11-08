import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // autentikasi
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ status: 'failed', message: 'Unauthorized' });
      return;
    }

    // validasi token
    next(); 
  } catch (error) {
    res.status(500).json({ status: 'failed', message: 'Authentication error' });
  }
};
