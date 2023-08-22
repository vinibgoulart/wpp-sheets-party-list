"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "server", {
    enumerable: true,
    get: function() {
        return server;
    }
});
const _app = require("./app");
const _mongo = require("./mongo");
const server = async ()=>{
    try {
        console.log("connecting to database...");
        await (0, _mongo.connectDatabase)();
    } catch (err) {
        console.log("Could not connect to database", {
            err
        });
        throw err;
    }
    (0, _app.app)();
};
