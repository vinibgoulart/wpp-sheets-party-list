import SheetModel from "../sheets/SheetModel";
import { createSheet } from "../sheets/api/createSheet";
import { EVENT_SHEET_COLUMN_ENUM } from "./EventSheetColumnEnum";
import { EVENT_SHEET_TITLE_ENUM } from "./EventSheetTitleEnum";

type HandleCreateSheetParam = {
  title: string;
  groupId: string;
  createdBy: string;
};

export const handleCreateEvent = async (params: HandleCreateSheetParam) => {
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
                      stringValue: EVENT_SHEET_COLUMN_ENUM.GUESTS,
                    },
                  },
                ],
              },
            ],
          },
          {
            startRow: 0,
            startColumn: 1,
            rowData: [
              {
                values: [
                  {
                    userEnteredValue: {
                      stringValue: EVENT_SHEET_COLUMN_ENUM.FREE,
                    },
                  },
                ],
              },
            ],
          },
        ],
        properties: {
          title: EVENT_SHEET_TITLE_ENUM.DEFAULT,
        },
      },
    ],
  };

  const createdSheet = await createSheet(title, options);

  const sheet = await new SheetModel({
    title,
    groupId,
    createdBy,
    sheetId: createdSheet.sheetId,
    sheetUrl: createdSheet.sheetUrl,
  }).save();

  return { sheet };
};