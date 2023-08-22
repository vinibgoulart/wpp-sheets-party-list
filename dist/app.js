"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "app", {
    enumerable: true,
    get: function() {
        return app;
    }
});
const _loadTranslations = require("./i18n/loadTranslations");
const _client = require("./wweb/client");
const app = ()=>{
    (0, _loadTranslations.loadTranslations)();
    (0, _client.connectClient)();
};
