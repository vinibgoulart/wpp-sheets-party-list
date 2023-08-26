import { __ } from "i18n";
import SheetModel from "../sheets/SheetModel";
import { createSheet } from "../sheets/api/createSheet";
import { EVENT_SHEET_TITLE_ENUM } from "./enum/EventSheetTitleEnum";
import {
  EVENT_COLUMN_DESCRIPTION_ENUM,
  EVENT_COLUMN_ENUM,
} from "./enum/EventColumnEnum";

type CreateSheetParam = {
  title: string;
  groupId: string;
  createdBy: string;
};

export const createEvent = async (params: CreateSheetParam) => {
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
                      stringValue: __(
                        EVENT_COLUMN_DESCRIPTION_ENUM[EVENT_COLUMN_ENUM.GUEST]
                      ),
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
                      stringValue: __(
                        EVENT_COLUMN_DESCRIPTION_ENUM[EVENT_COLUMN_ENUM.FREE]
                      ),
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
                      stringValue: __(
                        EVENT_COLUMN_DESCRIPTION_ENUM[EVENT_COLUMN_ENUM.PAID]
                      ),
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
