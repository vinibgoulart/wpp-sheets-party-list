import { getSheetsService } from "../SheetService";

export const getSheet = async (spreadsheetId: string) => {
  const { sheetsService } = await getSheetsService();

  if (!spreadsheetId) {
    throw new Error("Please provide a spreadsheetId");
  }

  try {
    const spreadsheet = await sheetsService.spreadsheets.get({
      spreadsheetId,
    });

    return {
      data: spreadsheet.data,
    };
  } catch (err) {
    throw err;
  }
};
