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
exports.returnBook = exports.borrowBook = void 0;
const book_models_1 = __importDefault(require("../models/book.models"));
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_models_1.default.findById(id);
        if (!book || book.qty < 1) {
            res.status(400).json({
                status: 'failed',
                message: 'Book is unavailable for borrowing',
                data: {}
            });
            return;
        }
        book.qty -= 1;
        yield book.save();
        res.status(200).json({
            status: 'success',
            message: 'Successfully borrowed book',
            data: { currentQty: book.qty }
        });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Error borrowing book', data: {} });
    }
});
exports.borrowBook = borrowBook;
const returnBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_models_1.default.findById(id);
        if (!book) {
            res.status(400).json({
                status: 'failed',
                message: 'Book not found',
                data: {}
            });
            return;
        }
        book.qty += 1;
        yield book.save();
        res.status(200).json({
            status: 'success',
            message: 'Successfully returned book',
            data: { currentQty: book.qty }
        });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Error returning book', data: {} });
    }
});
exports.returnBook = returnBook;
