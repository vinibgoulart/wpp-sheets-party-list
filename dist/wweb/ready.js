"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onReady", {
    enumerable: true,
    get: function() {
        return onReady;
    }
});
const _client = require("./client");
const onReady = ()=>{
    _client.client.on("ready", ()=>{
        console.log("Client is ready!");
    });
};
