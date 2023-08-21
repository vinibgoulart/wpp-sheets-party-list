import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

type ISheet = {
  title: string;
  sheetId: string;
  sheetUrl: string;
  createdBy: string;
  groupId: string;
  isListening: boolean;
  removedAt: Date;
};

export type SheetDocument = Document & ISheet;

const SheetSchema = new Schema<SheetDocument>(
  {
    title: {
      type: String,
      required: true,
      index: true,
      description: "Sheets title",
    },
    groupId: {
      type: String,
      required: true,
      description: "Sheets groupId",
    },
    sheetId: {
      type: String,
      required: true,
      description: "Sheets sheetsId",
    },
    sheetUrl: {
      type: String,
      required: true,
      description: "Sheets sheetsUrl",
    },
    createdBy: {
      type: String,
      required: true,
      description: "Sheets createdBy",
    },
    isListening: {
      type: Boolean,
      required: true,
      default: true,
      description: "Sheets isListening",
    },
    removedAt: {
      type: Date,
      index: true,
      default: null,
    },
  },
  {
    collection: "Sheet",
    timestamps: true,
  }
);

export const SheetModel = model<SheetDocument>("Sheet", SheetSchema);

export default SheetModel;
