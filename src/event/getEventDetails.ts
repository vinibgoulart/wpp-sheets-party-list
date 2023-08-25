import SheetModel from "../sheets/SheetModel";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { getSheet } from "../sheets/api/getSheet";
import { EVENT_COLUMN_ENUM } from "./enum/EventColumnEnum";
import { getRangeByColumn } from "./getRangeByColumn";

type GetEventDetailsParams = {
  groupId: string;
};

export const getEventDetails = async (
  params: GetEventDetailsParams
) => {
  const { groupId } = params;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  const rangeGuest = getRangeByColumn(EVENT_COLUMN_ENUM.GUEST);
  const rangeFree = getRangeByColumn(EVENT_COLUMN_ENUM.FREE);
  const rangePaid = getRangeByColumn(EVENT_COLUMN_ENUM.PAID);

  const { data } = await getSheet(sheets!.sheetId);
  const { rows: rowsGuest } = await getRowsFromColumn(
    sheets!.sheetId,
    rangeGuest
  );
  const { rows: rowsFree } = await getRowsFromColumn(
    sheets!.sheetId,
    rangeFree
  );
  const { rows: rowsPaid } = await getRowsFromColumn(
    sheets!.sheetId,
    rangePaid
  );

  return {
    id: data.spreadsheetId,
    url: data.spreadsheetUrl,
    qty: {
      guest: rowsGuest ? rowsGuest.length : 0,
      free: rowsFree ? rowsFree.length : 0,
      paid: rowsPaid ? rowsPaid.length : 0,
    },
  };
};
