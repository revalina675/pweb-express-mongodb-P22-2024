"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    try {
        // Logika autentikasi Anda di sini
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ status: 'failed', message: 'Unauthorized' });
            return;
        }
        // Logika validasi token atau autentikasi lainnya
        next(); // Jika valid, lanjut ke handler berikutnya
    }
    catch (error) {
        res.status(500).json({ status: 'failed', message: 'Authentication error' });
    }
};
exports.authMiddleware = authMiddleware;
