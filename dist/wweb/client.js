"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    client: function() {
        return client;
    },
    connectClient: function() {
        return connectClient;
    }
});
const _whatsappweb = require("whatsapp-web.js");
const _ready = require("./ready");
const _onMessage = require("./onMessage/index");
const _onAuthFailure = require("./onAuthFailure");
const _onQrCode = require("./onQrCode");
const client = new _whatsappweb.Client({
    authStrategy: new _whatsappweb.LocalAuth(),
    authTimeoutMs: 60 * 1000
});
const connectClient = ()=>{
    console.log("initializing client");
    client.initialize();
    (0, _onQrCode.onQrCode)();
    (0, _ready.onReady)();
    (0, _onAuthFailure.onAuthFailure)();
    (0, _onMessage.onMessage)();
};
