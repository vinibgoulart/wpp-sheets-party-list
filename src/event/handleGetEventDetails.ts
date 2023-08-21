import SheetModel from "../sheets/SheetModel";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { getSheet } from "../sheets/api/getSheet";
import { EVENT_SHEET_TITLE_ENUM } from "./EventSheetTitleEnum";

type HandleGetEventDetailsParams = {
  groupId: string;
};

export const handleGetEventDetails = async (
  params: HandleGetEventDetailsParams
) => {
  const { groupId } = params;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  const range = `${EVENT_SHEET_TITLE_ENUM.DEFAULT}!A3:A`;

  const { data } = await getSheet(sheets!.sheetId);
  const { rows } = await getRowsFromColumn(sheets!.sheetId, range);

  return {
    id: data.spreadsheetId,
    url: data.spreadsheetUrl,
    guestQty: rows?.length,
  };
};
