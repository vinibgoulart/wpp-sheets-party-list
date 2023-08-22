"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRowsFromColumn", {
    enumerable: true,
    get: function() {
        return getRowsFromColumn;
    }
});
const _service = require("../service");
const getRowsFromColumn = async (spreadsheetId, range)=>{
    const { sheetsService } = await (0, _service.getSheetsService)();
    if (!spreadsheetId) {
        throw new Error("Please provide a spreadsheetId");
    }
    if (!range) {
        throw new Error("Please provide a range");
    }
    try {
        const spreadsheet = await sheetsService.spreadsheets.values.get({
            spreadsheetId,
            range
        });
        const rows = spreadsheet.data.values?.map((value)=>value[0]);
        return {
            rows
        };
    } catch (err) {
        throw err;
    }
};
