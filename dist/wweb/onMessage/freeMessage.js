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
const _sanitizeNames = require("../../utils/sanitizeNames");
const _handleAddParticipant = require("../../event/handleAddParticipant");
const _EventColumnEnum = require("../../event/EventColumnEnum");
const _middleware = require("../middleware/middleware");
const freeMessage = async (msg)=>{
    const quotedMessage = await msg.getQuotedMessage();
    const sanitizedNames = (0, _sanitizeNames.sanitizeNames)(quotedMessage.body);
    const groupId = msg.id.remote;
    const payload = {
        groupId,
        names: sanitizedNames,
        column: _EventColumnEnum.EVENT_COLUMN_ENUM.FREE
    };
    await (0, _handleAddParticipant.handleAddParticipant)(payload);
    msg.react("🚀");
};
const _default = (0, _middleware.middleware)(freeMessage, {
    hasSheets: true
});
