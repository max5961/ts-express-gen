"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(username, id) {
    return {
        username,
        id,
    };
}
function isUser(arg) {
    return (!!arg &&
        typeof arg === "object" &&
        "username" in arg &&
        typeof arg.username === "string" &&
        "id" in arg &&
        typeof arg.id === "number");
}
function from(arg) {
    if (!isUser(arg)) {
        throw new Error("Invalid IUser shape");
    }
    const u = arg;
    return create(u.username, u.id);
}
exports.default = {
    create,
    isUser,
    from,
};
