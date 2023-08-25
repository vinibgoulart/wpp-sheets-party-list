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
  GOOGLE_PROJECT_ID,
  GOOGLE_PRIVATE_KEY_ID,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_AUTH_URI,
  GOOGLE_TOKEN_URI,
  GOOGLE_AUTH_PROVIDER,
  GOOGLE_CLIENT_CERT_URL,
  GOOGLE_USER_EMAIL,
} = process.env;

export const config = {
  MONGO_URI,
  GOOGLE_PROJECT_ID,
  GOOGLE_PRIVATE_KEY_ID,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_AUTH_URI,
  GOOGLE_TOKEN_URI,
  GOOGLE_AUTH_PROVIDER,
  GOOGLE_CLIENT_CERT_URL,
  GOOGLE_USER_EMAIL,
};
