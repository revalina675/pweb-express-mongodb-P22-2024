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
exports.addBook = exports.getBooks = void 0;
const book_models_1 = __importDefault(require("../models/book.models")); // Perbaiki dari book.model ke book.models
// Mengambil daftar buku
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_models_1.default.find();
        res.status(200).json({
            status: 'success',
            message: 'Books retrieved successfully',
            data: books
        });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Error fetching books', data: [] });
    }
});
exports.getBooks = getBooks;
// Menambahkan buku baru
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishedDate, qty } = req.body;
        const newBook = new book_models_1.default({ title, author, publishedDate, qty });
        yield newBook.save();
        res.status(201).json({
            status: 'success',
            message: 'Book added successfully',
            data: newBook
        });
    }
    catch (error) {
        res.status(500).json({ status: 'failed', message: 'Error adding book', data: {} });
    }
});
exports.addBook = addBook;
