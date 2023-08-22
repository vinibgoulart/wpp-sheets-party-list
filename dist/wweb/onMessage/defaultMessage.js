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
const _middleware = require("../middleware/middleware");
const _EventColumnEnum = require("../../event/EventColumnEnum");
const defaultMessage = async (msg)=>{
    if (!msg.body) {
        return;
    }
    const sanitizedNames = (0, _sanitizeNames.sanitizeNames)(msg.body);
    const groupId = msg.id.remote;
    const payload = {
        groupId,
        names: sanitizedNames,
        column: _EventColumnEnum.EVENT_COLUMN_ENUM.GUEST
    };
    await (0, _handleAddParticipant.handleAddParticipant)(payload);
    msg.react("✅");
};
const _default = (0, _middleware.middleware)(defaultMessage, {
    isListening: true
});
