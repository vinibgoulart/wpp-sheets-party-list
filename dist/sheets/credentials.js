"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "credentials", {
    enumerable: true,
    get: function() {
        return credentials;
    }
});
const _config = require("../config");
const credentials = {
    web: {
        client_id: _config.config.SHEETS_CLIENT_ID,
        project_id: _config.config.SHEETS_PROJECT_ID,
        auth_uri: _config.config.SHEETS_AUTH_URI,
        token_uri: _config.config.SHEETS_TOKEN_URI,
        auth_provider_x509_cert_url: _config.config.SHEETS_AUTH_PROVIDER,
        client_secret: _config.config.SHEETS_CLIENT_SECRET,
        redirect_uris: [
            "http://localhost:3000/oauth2callback"
        ]
    }
};
