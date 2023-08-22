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
const _setSheetsInDescription = require("../setSheetsInDescription");
const _i18n = require("i18n");
const _handleGetEventDetails = require("../../event/handleGetEventDetails");
const _middleware = require("../middleware/middleware");
const sheetsDetailMessage = async (msg)=>{
    const chat = await msg.getChat();
    const groupId = msg.id.remote;
    const payload = {
        groupId
    };
    const { id, url, guestQty } = await (0, _handleGetEventDetails.handleGetEventDetails)(payload);
    msg.reply(`*${(0, _i18n.__)("Sheet Detail")}:*    
ID: *${id}*
Url: *${url}*
Number of participants: *${guestQty}*`);
    msg.react("👍");
    (0, _setSheetsInDescription.setSheetsInDescription)(chat, {
        sheetsUrl: url
    });
};
const _default = (0, _middleware.middleware)(sheetsDetailMessage, {
    hasSheets: true
});
