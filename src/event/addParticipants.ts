import SheetModel from "../sheets/SheetModel";
import { addRowsInColumn } from "../sheets/api/addRowsInColumn";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { sanitizeNames } from "../utils/sanitizeNames";
import { EVENT_COLUMN_POSITION_ENUM } from "./enum/EventColumnEnum";
import { EVENT_SHEET_TITLE_ENUM } from "./enum/EventSheetTitleEnum";
import { handleRemoveParticipants } from "./handleRemoveParticipants";

type AddParticipantParams = {
  groupId: string;
  column: keyof typeof EVENT_COLUMN_POSITION_ENUM;
  names: string[];
};

export const addParticipants = async (params: AddParticipantParams) => {
  const { groupId, names } = params;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  await handleRemoveParticipants({
    groupId,
    names,
  });

  const columnPosition = EVENT_COLUMN_POSITION_ENUM[params.column];

  const range = `${EVENT_SHEET_TITLE_ENUM.DEFAULT}!${columnPosition}3:${columnPosition}`;

  const { rows: currentValues } = await getRowsFromColumn(
    sheets!.sheetId,
    range
  );

  const newNames = currentValues ? [...currentValues, ...names] : names;

  const newValues = sanitizeNames(newNames.toString());

  await addRowsInColumn(sheets!.sheetId, range, newValues);

  return {
    newValues,
  };
};
