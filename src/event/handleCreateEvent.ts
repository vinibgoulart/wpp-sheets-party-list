import { __ } from "i18n";
import SheetModel from "../sheets/SheetModel";
import { createSheet } from "../sheets/api/createSheet";
import { EVENT_SHEET_TITLE_ENUM } from "./EventSheetTitleEnum";
import { EVENT_COLUMN_DESCRIPTION_ENUM } from "./EventColumnEnum";

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
                      stringValue: EVENT_COLUMN_DESCRIPTION_ENUM.GUEST,
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
                      stringValue: EVENT_COLUMN_DESCRIPTION_ENUM.FREE,
                    },
                  },
                ],
              },
            ],
          },
          {
            startRow: 0,
            startColumn: 2,
            rowData: [
              {
                values: [
                  {
                    userEnteredValue: {
                      stringValue: EVENT_COLUMN_DESCRIPTION_ENUM.PAID,
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
