"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(username, message, id, createdAt) {
    return {
        username,
        message,
        id,
        createdAt: createdAt !== null && createdAt !== void 0 ? createdAt : new Date().toLocaleString(),
    };
}
function isMessage(arg) {
    return (!!arg &&
        typeof arg === "object" &&
        "username" in arg &&
        typeof arg.username === "string" &&
        "message" in arg &&
        typeof arg.message === "string" &&
        "id" in arg &&
        typeof arg.id === "number" &&
        "createdAt" in arg &&
        typeof arg.createdAt === "string");
}
function from(arg) {
    if (!isMessage(arg)) {
        throw new Error("Invalid object shape");
    }
    const m = arg;
    return create(m.username, m.message, m.id, m.createdAt);
}
exports.default = {
    create,
    from,
    isMessage,
};
