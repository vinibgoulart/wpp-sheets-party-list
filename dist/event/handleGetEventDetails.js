"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleGetEventDetails", {
    enumerable: true,
    get: function() {
        return handleGetEventDetails;
    }
});
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../sheets/SheetModel"));
const _getRowsFromColumn = require("../sheets/api/getRowsFromColumn");
const _getSheet = require("../sheets/api/getSheet");
const _EventSheetTitleEnum = require("./EventSheetTitleEnum");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const handleGetEventDetails = async (params)=>{
    const { groupId } = params;
    const sheets = await _SheetModel.default.findOne({
        groupId,
        removedAt: null
    });
    const range = `${_EventSheetTitleEnum.EVENT_SHEET_TITLE_ENUM.DEFAULT}!A3:A`;
    const { data } = await (0, _getSheet.getSheet)(sheets.sheetId);
    const { rows } = await (0, _getRowsFromColumn.getRowsFromColumn)(sheets.sheetId, range);
    return {
        id: data.spreadsheetId,
        url: data.spreadsheetUrl,
        guestQty: rows?.length
    };
};
