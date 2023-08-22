"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasSheets", {
    enumerable: true,
    get: function() {
        return hasSheets;
    }
});
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../../sheets/SheetModel"));
const _i18n = require("i18n");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasSheets = async (msg)=>{
    const chat = await msg.getChat();
    if (!chat.isGroup) {
        msg.reply("This command only works in groups");
        return false;
    }
    const groupId = msg.id.remote;
    const sheets = await _SheetModel.default.findOne({
        groupId,
        removedAt: null
    });
    if (!sheets) {
        msg.reply((0, _i18n.__)("No sheets found, create one with `!sc`"));
        return false;
    }
    return true;
};
