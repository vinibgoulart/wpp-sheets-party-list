import SheetModel from "../sheets/SheetModel";
import { addRowInColumn } from "../sheets/api/addRowInColumn";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { sanitizeNames } from "../utils/sanitizeNames";
import {
  EVENT_COLUMN_ENUM,
  EVENT_COLUMN_POSITION_ENUM,
} from "./EventColumnEnum";
import { getRangeByColumn } from "./getRangeByColumn";

type HandleRemoveParticipantParams = {
  groupId: string;
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

  for (const column in EVENT_COLUMN_ENUM) {
    const range = getRangeByColumn(column);

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

    if (newNames.length === currentValues.length) {
      continue;
    }

    const sanitizedNames = sanitizeNames(newNames.toString());

    const newValues = [
      ...sanitizedNames,
      ...Array(currentValues.length - sanitizedNames.length).fill(""),
    ];

    await addRowInColumn(sheets!.sheetId, range, newValues);
  }
};
