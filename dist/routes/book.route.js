"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controllers_1 = require("../controllers/book.controllers"); // Perbaiki dari book.controller ke book.controllers
const router = express_1.default.Router();
router.get('/', book_controllers_1.getBooks);
router.post('/', book_controllers_1.addBook);
exports.default = router;
