import fs from "fs";
import path from "path";
import { google } from "googleapis";
import { credentials } from "./credentials";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive",
];

export const writeCredentials = () => {
  const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

  const credentialsJSON = JSON.stringify(credentials, null, 2);

  fs.writeFileSync(CREDENTIALS_PATH, credentialsJSON, { encoding: "utf-8" });
};

const authorize = async () => {
  const client = new google.auth.GoogleAuth({
    scopes: SCOPES,
    keyFile: "credentials.json",
  });

  return client;
};

export const getSheetsService = async () => {
  const client = await authorize();
  const sheetsService = google.sheets({ version: "v4", auth: client });

  return { sheetsService };
};

export const getDriveService = async () => {
  const client = await authorize();
  const driveService = google.drive({ version: "v3", auth: client });

  return { driveService };
};
