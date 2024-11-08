import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

// registrasi
router.post('/register', register);

// login
router.post('/login', login);

export default router;
