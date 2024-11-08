# pweb-express-mongodb-P22-2024

## Anggota Kelompok

| Nama                            | NRP        |
|---------------------------------|------------|
| Revalina Fairuzy Azhari Putri   | 5027231001 |
| Dian Anggraeni Putri            | 5027231016 |

## Langkah Pengerjaan

1. Inisialisasi Proyek untuk membuat `package.json`
     ```
     npm init -y
     ```

2. instal semua dependensi yang diperlukan, termasuk `express`, `mongoose`, `dotenv`, dan `jsonwebtoken`:
     ```
     npm install express mongoose dotenv jsonwebtoken bcrypt
     ```
3. buat File ".env" dengan template berikut:
     ```
     MONGODB_URI=mongodb+srv://[username]:[password]@[cluster-name]/[db-name]?retryWrites=true&w=majority&appName=[]
     JWT_SECRET=[your_secret]
     ```
   - Ganti placeholder dengan informasi yang sesuai dengan akun MongoDB.

4. buat struktur folder

5. buat Koneksi MongoDB, di `db-connection.ts`, buat fungsi untuk menghubungkan ke MongoDB menggunakan `mongoose`:

6. buat Model Data untuk book dan user.

7. buat Controller, buat fungsi untuk menangani logika API di masing-masing controller.

8. tambahkan route di auth dan book

9. inisialisasi server Express dan sambungkan ke MongoDB Di `index.ts`.

10. jalankan server dengan command:
     ```
     npm run start:dev
     ```

### Dokumentasi pengujian API menggunakan Postman:
1. Health Check, memeriksa status layanan.
![image](https://github.com/user-attachments/assets/b6121189-0808-40d1-9a57-7204bf21c44b)

2. Register User
![image](https://github.com/user-attachments/assets/5480234b-3eac-4a09-8b42-dd7e29d64889)

3. Login User
![image](https://github.com/user-attachments/assets/47fb05d4-b28b-4be6-92b6-60473f1a17f5)

4. Get All Books
![image](https://github.com/user-attachments/assets/b540929d-0120-40c6-8b6f-83a44383e6d6)

5. Add a New Book
![image](https://github.com/user-attachments/assets/2f656d57-3fc1-498d-ade0-a640051ed43b)

6. Get Book by ID
![image](https://github.com/user-attachments/assets/ed645432-0b02-4448-b739-021d813dfcd2)

7. Borrow a Book
![image](https://github.com/user-attachments/assets/951c4197-3734-41bd-a0bf-ab2a6d00c7a9)

8. Return a Book
![image](https://github.com/user-attachments/assets/9df2946c-b243-492a-9bb9-574444a60fbd)

9.  Modify Book Data
![image](https://github.com/user-attachments/assets/8f495fde-0725-46cd-bbce-38f20ad96c7e)

10. Delete Book
![image](https://github.com/user-attachments/assets/a416a8d1-1588-4b26-b19d-072452752923)

