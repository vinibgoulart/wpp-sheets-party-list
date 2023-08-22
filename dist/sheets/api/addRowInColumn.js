"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addRowInColumn", {
    enumerable: true,
    get: function() {
        return addRowInColumn;
    }
});
const _service = require("../service");
const _SheetDimensionEnum = require("./SheetDimensionEnum");
const _SheetValueInputOptionEnum = require("./SheetValueInputOptionEnum");
const addRowInColumn = async (spreadsheetId, range, values)=>{
    const { sheetsService } = await (0, _service.getSheetsService)();
    if (!spreadsheetId) {
        throw new Error("Please provide a spreadsheetId");
    }
    if (!range) {
        throw new Error("Please provide a range");
    }
    if (!values) {
        throw new Error("Please provide a values");
    }
    try {
        const spreadsheet = await sheetsService.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: _SheetValueInputOptionEnum.SHEET_VALUE_INPUT_OPTION_ENUM.RAW,
            requestBody: {
                range,
                majorDimension: _SheetDimensionEnum.SHEET_DIMENSION_ENUM.ROWS,
                values: values.map((value)=>[
                        value
                    ])
            }
        });
        return {
            data: spreadsheet.data
        };
    } catch (err) {
        throw err;
    }
};
