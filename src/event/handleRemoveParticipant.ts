import SheetModel from "../sheets/SheetModel";
import { addRowInColumn } from "../sheets/api/addRowInColumn";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { sanitizeNames } from "../utils/sanitizeNames";
import {
  EVENT_COLUMN_DESCRIPTION_ENUM,
  EVENT_COLUMN_POSITION_ENUM,
} from "./EventColumnEnum";
import { EVENT_SHEET_TITLE_ENUM } from "./EventSheetTitleEnum";

type HandleRemoveParticipantParams = {
  groupId: string;
  column: keyof typeof EVENT_COLUMN_DESCRIPTION_ENUM;
  names: string[];
};

export const handleRemoveParticipant = async (
  params: HandleRemoveParticipantParams
) => {
  const { groupId, names } = params;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  const columnPosition = EVENT_COLUMN_POSITION_ENUM[params.column];

  const range = `${EVENT_SHEET_TITLE_ENUM.DEFAULT}!${columnPosition}3:${columnPosition}`;

  const { rows: currentValues } = await getRowsFromColumn(
    sheets!.sheetId,
    range
  );

  if (!currentValues) {
    return {
      newValues: [],
    };
  }

  const newNames = currentValues.filter((name) => !names.includes(name));

  const sanitizedNames = sanitizeNames(newNames.toString());

  const newValues = [
    ...sanitizedNames,
    ...Array(currentValues.length - sanitizedNames.length).fill(""),
  ];

  await addRowInColumn(sheets!.sheetId, range, newValues);

  return {
    newValues,
  };
};
