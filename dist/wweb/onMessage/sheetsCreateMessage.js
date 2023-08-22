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
const _handleCreateEvent = require("../../event/handleCreateEvent");
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../../sheets/SheetModel"));
const _setSheetsInDescription = require("../setSheetsInDescription");
const _i18n = require("i18n");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sheetCreateMessage = async (msg)=>{
    const chat = await msg.getChat();
    const groupId = msg.id.remote;
    const sheetExistent = await _SheetModel.default.findOne({
        groupId,
        removedAt: null
    });
    if (sheetExistent) {
        msg.reply((0, _i18n.__)("Sheet already exists, use `!sd`"));
        return;
    }
    const payload = {
        title: chat.name,
        groupId,
        createdBy: msg.id.participant
    };
    const { sheet } = await (0, _handleCreateEvent.handleCreateEvent)(payload);
    msg.reply(`*${(0, _i18n.__)("Sheet Created")}:*
ID: *${sheet.sheetId}*      
Url: *${sheet.sheetUrl}*`);
    msg.reply((0, _i18n.__)("Listening to new names, use `!stop` to stop listening to new names"));
    msg.react("👍");
    chat.setSubject(`${chat.name} - In Progress`);
    (0, _setSheetsInDescription.setSheetsInDescription)(chat, {
        sheetsUrl: sheet.sheetUrl
    });
};
const _default = sheetCreateMessage;
