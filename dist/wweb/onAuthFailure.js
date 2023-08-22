"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onAuthFailure", {
    enumerable: true,
    get: function() {
        return onAuthFailure;
    }
});
const _client = require("./client");
const onAuthFailure = ()=>{
    _client.client.on('auth_failure', (msg)=>{
        // Fired if session restore was unsuccessful
        console.error('AUTHENTICATION FAILURE', msg);
    });
};
