import { getDriveService, getSheetsService } from "../service";
import type { sheets_v4 } from "googleapis";

export type CreateSheetsPayload =
  sheets_v4.Params$Resource$Spreadsheets$Create["requestBody"];

export const createSheet = async (
  title: string,
  options?: CreateSheetsPayload
) => {
  const { sheetsService } = await getSheetsService();
  const { driveService } = await getDriveService();

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

    driveService.permissions.create({
      fileId: spreadsheet.data.spreadsheetId,
      requestBody: {
        emailAddress: "viblaziusgoulart@gmail.com",
        type: "user",
        role: "writer",
      },
    });
    
    return {
      sheetId: spreadsheet.data.spreadsheetId,
      sheetUrl: spreadsheet.data.spreadsheetUrl,
    };
  } catch (err) {
    throw err;
  }
};
