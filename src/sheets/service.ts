import fs from "fs";
import path from "path";
import { google } from "googleapis";
import { authenticate } from "@google-cloud/local-auth";
import { credentials } from "./credentials";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const TOKEN_PATH = path.join(__dirname, "sheet-token.json");
const CREDENTIALS_PATH = path.join(__dirname, "sheet-credentials.json");

const credentialsJSON = JSON.stringify(credentials, null, 2);

fs.writeFileSync(CREDENTIALS_PATH, credentialsJSON, { encoding: "utf-8" });

const loadSavedCredentialsIfExist = () => {
  try {
    const content = fs.readFileSync(TOKEN_PATH);
    const credentials = JSON.parse(content);

    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
};

const saveCredentials = (client) => {
  const content = fs.readFileSync(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;

  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });

  fs.writeFileSync(TOKEN_PATH, payload);
};

const authorize = async () => {
  let client = loadSavedCredentialsIfExist();

  if (client) {
    return client;
  }

  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });

  if (client.credentials) {
    saveCredentials(client);
  }

  return client;
};

export const getSheetsService = async () => {
  const client = await authorize();
  const sheetsService = google.sheets({ version: "v4", auth: client });

  return { sheetsService };
};
