import express from 'express';
import { borrowBook, returnBook } from '../controllers/mechanism.controller';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// meminjam buku
router.post('/borrow/:id', authMiddleware, borrowBook);

// mengembalikan buku
router.post('/return/:id', authMiddleware, returnBook);

export default router;
