import { Request, Response } from 'express';
import Book from '../models/book.models';

// Fungsi untuk meminjam buku
export const borrowBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; // Mengambil ID dari path
    const book = await Book.findById(id); // Mencari buku berdasarkan ID
    
    // Memeriksa apakah buku ada dan apakah qty lebih dari 0
    if (!book || book.qty < 1) {
      res.status(400).json({
        status: 'failed',
        message: 'Book is unavailable for borrowing',
        data: {}
      });
      return;
    }

    // Mengurangi qty buku
    book.qty -= 1;
    await book.save(); // Menyimpan perubahan ke database

    res.status(200).json({
      status: 'success',
      message: 'Successfully borrowed book',
      data: { currentQty: book.qty }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error borrowing book', data: {} });
  }
};

// Fungsi untuk mengembalikan buku
export const returnBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; // Mengambil ID dari path
    const book = await Book.findById(id); // Mencari buku berdasarkan ID
    
    // Memeriksa apakah buku ada
    if (!book) {
      res.status(400).json({
        status: 'failed',
        message: 'Book not found',
        data: {}
      });
      return;
    }

    // Menambah qty buku
    book.qty += 1;
    await book.save(); 

    res.status(200).json({
      status: 'success',
      message: 'Successfully returned book',
      data: { currentQty: book.qty }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error returning book', data: {} });
  }
};
