"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSheetsService", {
    enumerable: true,
    get: function() {
        return getSheetsService;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _googleapis = require("googleapis");
const _localauth = require("@google-cloud/local-auth");
const _credentials = require("./credentials");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets"
];
const TOKEN_PATH = _path.default.join(__dirname, "sheet-token.json");
const CREDENTIALS_PATH = _path.default.join(__dirname, "sheet-credentials.json");
const credentialsJSON = JSON.stringify(_credentials.credentials, null, 2);
_fs.default.writeFileSync(CREDENTIALS_PATH, credentialsJSON, {
    encoding: "utf-8"
});
const loadSavedCredentialsIfExist = ()=>{
    try {
        const content = _fs.default.readFileSync(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return _googleapis.google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
};
const saveCredentials = (client)=>{
    const content = _fs.default.readFileSync(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: "authorized_user",
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token
    });
    _fs.default.writeFileSync(TOKEN_PATH, payload);
};
const authorize = async ()=>{
    let client = loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await (0, _localauth.authenticate)({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH
    });
    if (client.credentials) {
        saveCredentials(client);
    }
    return client;
};
const getSheetsService = async ()=>{
    const client = await authorize();
    const sheetsService = _googleapis.google.sheets({
        version: "v4",
        auth: client
    });
    return {
        sheetsService
    };
};
