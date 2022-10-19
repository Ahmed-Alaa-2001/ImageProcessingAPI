"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeRouter_1 = __importDefault(require("./routes/HomeRouter"));
const ImageRouter_1 = __importDefault(require("./routes/ImageRouter"));
const path_1 = __importDefault(require("path"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({
    secret: 'this is my secret to hash express sessions',
    resave: false,
    saveUninitialized: false
}));
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets')));
app.use((0, connect_flash_1.default)());
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, 'views'));
app.use('/', HomeRouter_1.default);
app.use('/api', ImageRouter_1.default);
app.listen(3000, () => {
    console.log('server listen on http://localhost:3000/');
});
exports.default = app;
