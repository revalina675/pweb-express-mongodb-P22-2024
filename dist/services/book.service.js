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
exports.BookService = void 0;
const book_models_1 = __importDefault(require("../models/book.models"));
const mongoose_1 = require("mongoose");
class BookService {
    addBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = new book_models_1.default(bookData);
            return yield book.save();
        });
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_models_1.default.find();
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_models_1.default.findById(id);
        });
    }
    modifyBook(id, bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(0, mongoose_1.isValidObjectId)(id)) {
                    throw new Error(`Invalid book ID format: ${id}`);
                }
                const updatedBook = yield book_models_1.default.findByIdAndUpdate(id, bookData, { new: true });
                if (!updatedBook) {
                    throw new Error(`Book with ID ${id} not found`);
                }
                return updatedBook;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw error;
                }
                throw new Error('Failed to update book');
            }
        });
    }
    removeBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(0, mongoose_1.isValidObjectId)(id)) {
                    throw new Error(`Invalid book ID format: ${id}`);
                }
                const deletedBook = yield book_models_1.default.findByIdAndDelete(id);
                if (!deletedBook) {
                    throw new Error(`Book with ID ${id} not found`);
                }
                return deletedBook;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw error;
                }
                throw new Error('Failed to delete book');
            }
        });
    }
}
exports.BookService = BookService;
exports.default = new BookService();
