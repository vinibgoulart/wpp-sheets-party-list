import SheetModel from "../sheets/SheetModel";
import { addRowsInColumn } from "../sheets/api/addRowsInColumn";
import { getRowsFromColumn } from "../sheets/api/getRowsFromColumn";
import { sanitizeNames } from "../utils/sanitizeNames";
import {
  EVENT_COLUMN_ENUM,
} from "./enum/EventColumnEnum";
import { getRangeByColumn } from "./getRangeByColumn";

type HandleRemoveParticipantsParams = {
  groupId: string;
  names: string[];
};

export const handleRemoveParticipants = async (
  params: HandleRemoveParticipantsParams
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

    await addRowsInColumn(sheets!.sheetId, range, newValues);
  }
};
