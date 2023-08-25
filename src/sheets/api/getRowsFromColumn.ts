import { getSheetsService } from "../SheetService";

export const getRowsFromColumn = async (
  spreadsheetId: string,
  range: string
) => {
  const { sheetsService } = await getSheetsService();

  if (!spreadsheetId) {
    throw new Error("Please provide a spreadsheetId");
  }

  if (!range) {
    throw new Error("Please provide a range");
  }

  try {
    const spreadsheet = await sheetsService.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = spreadsheet.data.values?.map((value) => value[0]);

    return {
      rows,
    };
  } catch (err) {
    throw err;
  }
};
