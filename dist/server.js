"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const Paths_1 = __importDefault(require("./common/Paths"));
const homepage_1 = require("./routes/homepage");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.resolve(Paths_1.default.src, "views"));
app.use(log);
/* body parser middleware */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/", homepage_1.homeRouter);
exports.default = app;
function log(req, res, next) {
    console.log(`${req.method} ${req.protocol}://localhost:3000${req.originalUrl}`);
    next();
}
