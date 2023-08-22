"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onMessage", {
    enumerable: true,
    get: function() {
        return onMessage;
    }
});
const _client = require("../client");
const _defaultMessage = /*#__PURE__*/ _interop_require_default(require("./defaultMessage"));
const _freeMessage = /*#__PURE__*/ _interop_require_default(require("./freeMessage"));
const _helpMessage = /*#__PURE__*/ _interop_require_default(require("./helpMessage"));
const _howItWorksMessage = /*#__PURE__*/ _interop_require_default(require("./howItWorksMessage"));
const _inputExamplesMessage = /*#__PURE__*/ _interop_require_default(require("./inputExamplesMessage"));
const _paidMessage = /*#__PURE__*/ _interop_require_default(require("./paidMessage"));
const _sheetsCreateMessage = /*#__PURE__*/ _interop_require_default(require("./sheetsCreateMessage"));
const _sheetsDetailMessage = /*#__PURE__*/ _interop_require_default(require("./sheetsDetailMessage"));
const _sheetsFinishMessage = /*#__PURE__*/ _interop_require_default(require("./sheetsFinishMessage"));
const _startListeningMessage = /*#__PURE__*/ _interop_require_default(require("./startListeningMessage"));
const _stopListeningMessage = /*#__PURE__*/ _interop_require_default(require("./stopListeningMessage"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const onMessage = ()=>{
    _client.client.on("message", async (msg)=>{
        switch(msg.body){
            case "!help":
                return (0, _helpMessage.default)(msg);
            case "!hiw":
                return (0, _howItWorksMessage.default)(msg);
            case "!ie":
                return (0, _inputExamplesMessage.default)(msg);
            case "!sc":
                return (0, _sheetsCreateMessage.default)(msg);
            case "!sd":
                return (0, _sheetsDetailMessage.default)(msg);
            case "!sf":
                return (0, _sheetsFinishMessage.default)(msg);
            case "!start":
                return (0, _startListeningMessage.default)(msg);
            case "!stop":
                return (0, _stopListeningMessage.default)(msg);
            case "!free":
                return (0, _freeMessage.default)(msg);
            case "!paid":
                return (0, _paidMessage.default)(msg);
            default:
                return (0, _defaultMessage.default)(msg);
        }
    });
};
