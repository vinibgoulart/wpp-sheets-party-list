"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isListening", {
    enumerable: true,
    get: function() {
        return isListening;
    }
});
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../../sheets/SheetModel"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isListening = async (msg)=>{
    const chat = await msg.getChat();
    if (!chat.isGroup) {
        msg.reply("This command only works in groups");
        return false;
    }
    const groupId = msg.id.remote;
    const sheets = await _SheetModel.default.findOne({
        groupId,
        removedAt: null,
        isListening: true
    });
    if (!sheets) {
        return false;
    }
    return true;
};
