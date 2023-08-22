"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onQrCode", {
    enumerable: true,
    get: function() {
        return onQrCode;
    }
});
const _client = require("./client");
const _qrcodeterminal = /*#__PURE__*/ _interop_require_default(require("qrcode-terminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const onQrCode = ()=>{
    _client.client.on("qr", (qr)=>{
        _qrcodeterminal.default.generate(qr, {
            small: true
        });
    });
};
