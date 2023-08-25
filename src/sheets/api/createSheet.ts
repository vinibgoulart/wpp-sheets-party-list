import { createPermission } from "../../drive/api/createPermission";
import { getSheetsService } from "../SheetService";
import type { sheets_v4 } from "googleapis";

export type CreateSheetsPayload =
  sheets_v4.Params$Resource$Spreadsheets$Create["requestBody"];

export const createSheet = async (
  title: string,
  options?: CreateSheetsPayload
) => {
  const { sheetsService } = await getSheetsService();

  if (!title) {
    throw new Error("Please provide a title");
  }

  const payload = {
    properties: {
      title,
    },
    ...options,
  };

  try {
    const spreadsheet = await sheetsService.spreadsheets.create({
      requestBody: payload,
    });

    await createPermission(spreadsheet.data.spreadsheetId);

    return {
      sheetId: spreadsheet.data.spreadsheetId,
      sheetUrl: spreadsheet.data.spreadsheetUrl,
    };
  } catch (err) {
    throw err;
  }
};
