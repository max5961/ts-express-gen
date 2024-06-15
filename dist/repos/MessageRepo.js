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
const MockOrm_1 = __importDefault(require("./MockOrm"));
/* Get a message with a specific id */
function getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield MockOrm_1.default.openDb();
        for (const message of db.messages) {
            if (message.id === id) {
                return message;
            }
        }
        return null;
    });
}
/* Get all messages from the db */
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield MockOrm_1.default.openDb();
        return db.messages;
    });
}
/* Add a message */
function add(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield MockOrm_1.default.openDb();
        db.messages.push(message);
        return MockOrm_1.default.saveDb(db);
    });
}
/* Deletes a message.  If no message exists, does nothing */
function delete_(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield MockOrm_1.default.openDb();
        db.messages = db.messages.filter((message) => message.id !== id);
        return MockOrm_1.default.saveDb(db);
    });
}
/* Updates a message */
function update(updatedMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield MockOrm_1.default.openDb();
        db.messages = db.messages.map((message) => {
            if (message.id === updatedMessage.id)
                return updatedMessage;
            return message;
        });
        return MockOrm_1.default.saveDb(db);
    });
}
exports.default = {
    getOne,
    getAll,
    add,
    update,
    delete: delete_,
};
