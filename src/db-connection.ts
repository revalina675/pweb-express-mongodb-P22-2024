import mongoose from 'mongoose';
import dotenv from 'dotenv';

// ambil variabel environment dari file .env
dotenv.config();

const connectDB = async () => {
  try {
    // Menghubungkan ke MongoDB tanpa opsi tambahan yang sudah tidak diperlukan
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('MongoDB terhubung');
  } catch (error) {
    console.error('Gagal menghubungkan MongoDB:', error);
    process.exit(1);  // Keluar dari aplikasi jika koneksi gagal
  }
};

export default connectDB;
