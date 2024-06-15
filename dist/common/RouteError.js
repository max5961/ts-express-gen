"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error with status code and message
 */
class RouteError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
// **** Export default **** //
exports.default = RouteError;
