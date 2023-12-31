import {
  EVENT_COLUMN_ENUM,
  EVENT_COLUMN_POSITION_ENUM,
} from "./enum/EventColumnEnum";
import { EVENT_SHEET_TITLE_ENUM } from "./enum/EventSheetTitleEnum";

export const getRangeByColumn = (column: keyof typeof EVENT_COLUMN_ENUM) => {
  const columnPosition = EVENT_COLUMN_POSITION_ENUM[column];

  return `${EVENT_SHEET_TITLE_ENUM.DEFAULT}!${columnPosition}3:${columnPosition}`;
};
