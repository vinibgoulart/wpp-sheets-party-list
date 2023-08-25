import { getSheetsService } from "../SheetService";
import { SHEET_DIMENSION_ENUM } from "../SheetDimensionEnum";
import { SHEET_VALUE_INPUT_OPTION_ENUM } from "../SheetValueInputOptionEnum";

export const addRowInColumn = async (
  spreadsheetId: string,
  range: string,
  values: string[]
) => {
  const { sheetsService } = await getSheetsService();

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
      valueInputOption: SHEET_VALUE_INPUT_OPTION_ENUM.RAW,
      requestBody: {
        range,
        majorDimension: SHEET_DIMENSION_ENUM.ROWS,
        values: values.map((value) => [value]),
      },
    });

    return {
      data: spreadsheet.data,
    };
  } catch (err) {
    throw err;
  }
};
