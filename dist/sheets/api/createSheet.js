"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createSheet", {
    enumerable: true,
    get: function() {
        return createSheet;
    }
});
const _service = require("../service");
const createSheet = async (title, options)=>{
    const { sheetsService } = await (0, _service.getSheetsService)();
    if (!title) {
        throw new Error("Please provide a title");
    }
    const payload = {
        properties: {
            title
        },
        ...options
    };
    try {
        const spreadsheet = await sheetsService.spreadsheets.create({
            requestBody: payload
        });
        return {
            sheetId: spreadsheet.data.spreadsheetId,
            sheetUrl: spreadsheet.data.spreadsheetUrl
        };
    } catch (err) {
        throw err;
    }
};
