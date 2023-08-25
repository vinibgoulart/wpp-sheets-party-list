import { google } from "googleapis";
import { GOOGLE_SCOPES } from "./scopes";

export const authorize = async () => {
  const client = new google.auth.GoogleAuth({
    scopes: GOOGLE_SCOPES,
    keyFile: "credentials.json",
  });

  return { client };
};
