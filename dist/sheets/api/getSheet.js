"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSheet", {
    enumerable: true,
    get: function() {
        return getSheet;
    }
});
const _service = require("../service");
const getSheet = async (spreadsheetId)=>{
    const { sheetsService } = await (0, _service.getSheetsService)();
    if (!spreadsheetId) {
        throw new Error("Please provide a spreadsheetId");
    }
    try {
        const spreadsheet = await sheetsService.spreadsheets.get({
            spreadsheetId
        });
        return {
            data: spreadsheet.data
        };
    } catch (err) {
        throw err;
    }
};
