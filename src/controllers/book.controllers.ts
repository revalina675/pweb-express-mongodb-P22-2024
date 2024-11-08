import { Request, Response } from 'express';
import Book from '../models/book.models'; 

// Mengambil daftar buku
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: 'success',
      message: 'Books retrieved successfully',
      data: books
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error fetching books', data: [] });
  }
};

// Menambahkan buku baru
export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, publishedDate, qty } = req.body;
    const newBook = new Book({ title, author, publishedDate, qty });
    await newBook.save();
    res.status(201).json({
      status: 'success',
      message: 'Book added successfully',
      data: newBook
    });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: 'Error adding book', data: {} });
  }
};

// Mengambil buku berdasarkan ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ status: 'failed', message: 'Book not found' });
      return;
    }
    res.status(200).json({ status: 'success', data: book });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error fetching book', data: {} });
  }
};

// Mengupdate data buku berdasarkan ID
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Ambil data yang ingin diubah
    const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
    
    if (!updatedBook) {
      res.status(404).json({ status: 'failed', message: 'Book not found' });
      return;
    }

    res.status(200).json({
      status: 'success',
      message: 'Book updated successfully',
      data: updatedBook
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error updating book', data: {} });
  }
};

// Menghapus buku berdasarkan ID
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).json({ status: 'failed', message: 'Book not found' });
      return;
    }

    res.status(200).json({
      status: 'success',
      message: 'Book deleted successfully',
      data: {}
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error deleting book', data: {} });
  }
};
