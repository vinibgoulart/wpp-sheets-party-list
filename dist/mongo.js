"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "connectDatabase", {
    enumerable: true,
    get: function() {
        return connectDatabase;
    }
});
const _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
const _config = require("./config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const connectMongo = (options)=>new Promise((resolve, reject)=>{
        _mongoose.default.connection// Reject if an error ocurred when trying to connect to MongoDB
        .on("error", async (error)=>{
            // eslint-disable-next-line
            console.log("ERROR: Connection to MongoDB failed");
            reject(error);
        })// Exit Process if there is no longer a Database Connection
        .on("close", ()=>{
            // eslint-disable-next-line
            console.log("ERROR: Connection to MongoDB lost");
            process.exit(1);
        })// Connected to DB
        .once("open", ()=>{
            // Display connection information
            const infos = _mongoose.default.connections;
            // eslint-disable-next-line
            infos.map((info)=>// eslint-disable-next-line
                console.log(`Connected to ${info.host}:${info.port}/${info.name}`));
            // Return sucessfull promisse
            resolve();
        });
        _mongoose.default.connect(_config.config.MONGO_URI, options);
    });
const mongooseOptions = {
};
const connectDatabase = ()=>connectMongo(mongooseOptions);
