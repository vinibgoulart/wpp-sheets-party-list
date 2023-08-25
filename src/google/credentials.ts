import { config } from "../config";

export const credentials = {
  type: "service_account",
  project_id: config.GOOGLE_PROJECT_ID,
  private_key_id: config.GOOGLE_PRIVATE_KEY_ID,
  private_key: config.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
  client_email: config.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  client_id: config.GOOGLE_CLIENT_ID,
  auth_uri: config.GOOGLE_AUTH_URI,
  token_uri: config.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: config.GOOGLE_AUTH_PROVIDER,
  client_x509_cert_url: config.GOOGLE_CLIENT_CERT_URL,
  universe_domain: "googleapis.com",
};
