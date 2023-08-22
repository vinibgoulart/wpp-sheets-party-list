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
const _i18n = require("i18n");
const _handleGetEventDetails = require("../../event/handleGetEventDetails");
const _middleware = require("../middleware/middleware");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sheetsFinishMessage = async (msg)=>{
    const chat = await msg.getChat();
    const groupId = msg.id.remote;
    const payload = {
        groupId
    };
    const { guestQty } = await (0, _handleGetEventDetails.handleGetEventDetails)(payload);
    const sheets = await _SheetModel.default.findOneAndUpdate({
        groupId,
        removedAt: null
    }, {
        $set: {
            removedAt: new Date(),
            isListening: false
        }
    });
    msg.reply(`*${(0, _i18n.__)("Sheet Finished")}:*
ID: *${sheets.sheetId}*
Url: *${sheets.sheetUrl}*
Number of participants: *${guestQty || "0"}*`);
    msg.react("👍");
    const nameWithoutLabel = chat.name.split(" - ")[0];
    if (nameWithoutLabel) {
        chat.setSubject(nameWithoutLabel);
    }
};
const _default = (0, _middleware.middleware)(sheetsFinishMessage, {
    hasSheets: true
});
