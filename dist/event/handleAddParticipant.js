"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleAddParticipant", {
    enumerable: true,
    get: function() {
        return handleAddParticipant;
    }
});
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../sheets/SheetModel"));
const _addRowInColumn = require("../sheets/api/addRowInColumn");
const _getRowsFromColumn = require("../sheets/api/getRowsFromColumn");
const _sanitizeNames = require("../utils/sanitizeNames");
const _EventColumnEnum = require("./EventColumnEnum");
const _EventSheetTitleEnum = require("./EventSheetTitleEnum");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const handleAddParticipant = async (params)=>{
    const { groupId, names } = params;
    const sheets = await _SheetModel.default.findOne({
        groupId,
        removedAt: null
    });
    const columnPosition = _EventColumnEnum.EVENT_COLUMN_POSITION_ENUM[params.column];
    const range = `${_EventSheetTitleEnum.EVENT_SHEET_TITLE_ENUM.DEFAULT}!${columnPosition}3:${columnPosition}`;
    const { rows: currentValues } = await (0, _getRowsFromColumn.getRowsFromColumn)(sheets.sheetId, range);
    const newNames = currentValues ? [
        ...currentValues,
        ...names
    ] : names;
    const newValues = (0, _sanitizeNames.sanitizeNames)(newNames.toString());
    await (0, _addRowInColumn.addRowInColumn)(sheets.sheetId, range, newValues);
    return {
        newValues
    };
};
