"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connection_1 = __importDefault(require("./db-connection"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const book_route_1 = __importDefault(require("./routes/book.route"));
const mechanism_route_1 = __importDefault(require("./routes/mechanism.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(0, db_connection_1.default)();
app.use(express_1.default.json());
app.get('/health', (req, res) => {
    res.json({
        status: 'success',
        message: 'Service is running',
        data: { date: new Date() }
    });
});
app.use('/api/auth', auth_route_1.default);
app.use('/api/books', book_route_1.default);
app.use('/api/mechanism', mechanism_route_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
