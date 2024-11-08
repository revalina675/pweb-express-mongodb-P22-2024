import { Router } from 'express'; 
import { getBooks, addBook, getBookById, updateBook, deleteBook } from '../controllers/book.controllers'; 

const router = Router();

// mendapatkan semua buku
router.get('/', getBooks);

// menambahkan buku
router.post('/', addBook);

// mendapatkan buku berdasarkan ID
router.get('/:id', getBookById);

// update buku berdasarkan ID
router.patch('/:id', updateBook); 

// hapus buku berdasarkan ID
router.delete('/:id', deleteBook); 

export default router;
