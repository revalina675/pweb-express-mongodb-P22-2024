"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const auth_service_1 = require("../services/auth.service");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = yield (0, auth_service_1.hashPassword)(password);
        const newUser = new user_model_1.default({ username, email, password: hashedPassword });
        yield newUser.save();
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            data: { username, email }
        });
    }
    catch (error) {
        res.status(500).json({ status: 'failed', message: 'Error registering user', data: {} });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ status: 'failed', message: 'User not found', data: {} });
            return;
        }
        const isPasswordValid = yield (0, auth_service_1.validatePassword)(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ status: 'failed', message: 'Invalid credentials', data: {} });
            return;
        }
        const token = (0, auth_service_1.generateToken)(user);
        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            data: { token }
        });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Error logging in', data: {} });
    }
});
exports.login = login;
