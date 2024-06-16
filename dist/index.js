"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
/* 0 as an argument tells Express to choose an open port */
const PORT = process.env.PORT || 3000;
server_1.default.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
