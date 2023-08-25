import SheetModel from "../sheets/SheetModel";
import { addRowInColumn } from "../sheets/api/addRowInColumn";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { sanitizeNames } from "../utils/sanitizeNames";
import {
  EVENT_COLUMN_DESCRIPTION_ENUM,
  EVENT_COLUMN_POSITION_ENUM,
} from "./EventColumnEnum";
import { EVENT_SHEET_TITLE_ENUM } from "./EventSheetTitleEnum";
import { handleRemoveParticipant } from "./handleRemoveParticipant";

type HandleAddParticipantParams = {
  groupId: string;
  column: keyof typeof EVENT_COLUMN_DESCRIPTION_ENUM;
  names: string[];
};

export const handleAddParticipant = async (
  params: HandleAddParticipantParams
) => {
  const { groupId, names } = params;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  await handleRemoveParticipant({
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

  await addRowInColumn(sheets!.sheetId, range, newValues);

  return {
    newValues,
  };
};
