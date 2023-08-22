"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "config", {
    enumerable: true,
    get: function() {
        return config;
    }
});
const _dotenvsafe = /*#__PURE__*/ _interop_require_default(require("dotenv-safe"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const cwd = process.cwd();
const root = _path.default.join.bind(cwd);
_dotenvsafe.default.config({
    path: root(".env"),
    sample: root(".env.example")
});
const { MONGO_URI, SHEETS_CLIENT_ID, SHEETS_CLIENT_SECRET, SHEETS_PROJECT_ID, SHEETS_AUTH_URI, SHEETS_TOKEN_URI, SHEETS_AUTH_PROVIDER } = process.env;
const config = {
    MONGO_URI,
    SHEETS_CLIENT_ID,
    SHEETS_CLIENT_SECRET,
    SHEETS_PROJECT_ID,
    SHEETS_AUTH_URI,
    SHEETS_TOKEN_URI,
    SHEETS_AUTH_PROVIDER
};
