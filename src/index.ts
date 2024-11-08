import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db-connection';
import authRoutes from './routes/auth.route';
import bookRoutes from './routes/book.route';
import mechanismRoutes from './routes/mechanism.route';

// ambil variabel dari file .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Menghubungkan ke MongoDB
connectDB();

// Middleware untuk parsing JSON
app.use(express.json());

// Menghubungkan rute-rute yang ada
app.use('/auth', authRoutes);  // Rute autentikasi pada path /auth
app.use('/books', bookRoutes);  // Rute buku pada path /books
app.use('/mechanism', mechanismRoutes);  // Rute mekanisme pada path /mechanism

// Rute health untuk mengecek status server
app.get('/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Service is running',
    data: { date: new Date() },
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
