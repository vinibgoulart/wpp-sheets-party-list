import { google } from "googleapis";
import { authorize } from "../google/authorize";

export const getDriveService = async () => {
  const { client } = await authorize();
  const driveService = google.drive({ version: "v3", auth: client });

  return { driveService };
};
