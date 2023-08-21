import SheetModel from "../sheets/SheetModel";
import { addRowInColumn } from "../sheets/api/addRowInColumn";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { sanitizeNames } from "../utils/sanitizeNames";
import { EVENT_SHEET_TITLE_ENUM } from "./EventSheetTitleEnum";

type HandleAddGuestParams = {
  groupId: string;
  names: string[];
};

export const handleAddGuest = async (params: HandleAddGuestParams) => {
  const { groupId, names } = params;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  const range = `${EVENT_SHEET_TITLE_ENUM.DEFAULT}!A3:A`;

  const { rows: currentValues } = await getRowsFromColumn(
    sheets!.sheetId,
    range
  );

  const newNames = currentValues ? [...currentValues, ...names] : names;

  const newValues = sanitizeNames(newNames.toString());

  await addRowInColumn(sheets!.sheetId, range, newValues);

  return {
    newValues,
  };
};
