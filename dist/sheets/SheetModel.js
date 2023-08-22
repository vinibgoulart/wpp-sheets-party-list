"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    SheetModel: function() {
        return SheetModel;
    },
    default: function() {
        return _default;
    }
});
const _mongoose = require("mongoose");
const SheetSchema = new _mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
        description: "Sheets title"
    },
    groupId: {
        type: String,
        required: true,
        description: "Sheets groupId"
    },
    sheetId: {
        type: String,
        required: true,
        description: "Sheets sheetsId"
    },
    sheetUrl: {
        type: String,
        required: true,
        description: "Sheets sheetsUrl"
    },
    createdBy: {
        type: String,
        required: true,
        description: "Sheets createdBy"
    },
    isListening: {
        type: Boolean,
        required: true,
        default: true,
        description: "Sheets isListening"
    },
    removedAt: {
        type: Date,
        index: true,
        default: null
    }
}, {
    collection: "Sheet",
    timestamps: true
});
const SheetModel = (0, _mongoose.model)("Sheet", SheetSchema);
const _default = SheetModel;
