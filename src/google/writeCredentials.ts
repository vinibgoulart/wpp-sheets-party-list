import { credentials } from "./credentials";
import fs from "fs";
import path from "path";

export const writeCredentials = () => {
  const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

  const credentialsJSON = JSON.stringify(credentials, null, 2);

  fs.writeFileSync(CREDENTIALS_PATH, credentialsJSON, { encoding: "utf-8" });
};
