"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "middleware", {
    enumerable: true,
    get: function() {
        return middleware;
    }
});
const _hasSheets = require("./hasSheets");
const _isListening = require("./isListening");
const middleware = (next, { hasSheets = false, isListening = false })=>{
    return async (msg)=>{
        if (hasSheets) {
            const sheets = await (0, _hasSheets.hasSheets)(msg);
            if (!sheets) {
                return;
            }
            return next(msg);
        }
        if (isListening) {
            const listening = await (0, _isListening.isListening)(msg);
            if (!listening) {
                return;
            }
            return next(msg);
        }
        return next(msg);
    };
};
