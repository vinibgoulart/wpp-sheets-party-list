"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleCreateEvent", {
    enumerable: true,
    get: function() {
        return handleCreateEvent;
    }
});
const _SheetModel = /*#__PURE__*/ _interop_require_default(require("../sheets/SheetModel"));
const _createSheet = require("../sheets/api/createSheet");
const _EventSheetTitleEnum = require("./EventSheetTitleEnum");
const _EventColumnEnum = require("./EventColumnEnum");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const handleCreateEvent = async (params)=>{
    const { title, groupId, createdBy } = params;
    const options = {
        sheets: [
            {
                data: [
                    {
                        startRow: 0,
                        startColumn: 0,
                        rowData: [
                            {
                                values: [
                                    {
                                        userEnteredValue: {
                                            stringValue: _EventColumnEnum.EVENT_COLUMN_DESCRIPTION_ENUM.GUEST
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        startRow: 0,
                        startColumn: 1,
                        rowData: [
                            {
                                values: [
                                    {
                                        userEnteredValue: {
                                            stringValue: _EventColumnEnum.EVENT_COLUMN_DESCRIPTION_ENUM.FREE
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        startRow: 0,
                        startColumn: 2,
                        rowData: [
                            {
                                values: [
                                    {
                                        userEnteredValue: {
                                            stringValue: _EventColumnEnum.EVENT_COLUMN_DESCRIPTION_ENUM.PAID
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                properties: {
                    title: _EventSheetTitleEnum.EVENT_SHEET_TITLE_ENUM.DEFAULT
                }
            }
        ]
    };
    const createdSheet = await (0, _createSheet.createSheet)(title, options);
    const sheet = await new _SheetModel.default({
        title,
        groupId,
        createdBy,
        sheetId: createdSheet.sheetId,
        sheetUrl: createdSheet.sheetUrl
    }).save();
    return {
        sheet
    };
};
