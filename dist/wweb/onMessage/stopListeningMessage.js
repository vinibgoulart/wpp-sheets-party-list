"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../../sheets/SheetModel"));
const _middleware = require("../middleware/middleware");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const stopListeningMessage = async (msg)=>{
    const groupId = msg.id.remote;
    await _SheetModel.default.findOneAndUpdate({
        groupId,
        removedAt: null
    }, {
        $set: {
            isListening: false
        }
    });
    msg.react("🔇");
};
const _default = (0, _middleware.middleware)(stopListeningMessage, {
    hasSheets: true
});
