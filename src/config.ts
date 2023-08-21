import dotenvSafe from "dotenv-safe";
import path from "path";

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root(".env"),
  sample: root(".env.example"),
});

const {
  MONGO_URI,
  SHEETS_CLIENT_ID,
  SHEETS_CLIENT_SECRET,
  SHEETS_PROJECT_ID,
  SHEETS_AUTH_URI,
  SHEETS_TOKEN_URI,
  SHEETS_AUTH_PROVIDER,
} = process.env;

export const config = {
  MONGO_URI,
  SHEETS_CLIENT_ID,
  SHEETS_CLIENT_SECRET,
  SHEETS_PROJECT_ID,
  SHEETS_AUTH_URI,
  SHEETS_TOKEN_URI,
  SHEETS_AUTH_PROVIDER,
};
