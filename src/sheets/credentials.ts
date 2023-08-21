import { config } from "../config";

export const credentials = {
  web: {
    client_id: config.SHEETS_CLIENT_ID,
    project_id: config.SHEETS_PROJECT_ID,
    auth_uri: config.SHEETS_AUTH_URI,
    token_uri: config.SHEETS_TOKEN_URI,
    auth_provider_x509_cert_url: config.SHEETS_AUTH_PROVIDER,
    client_secret: config.SHEETS_CLIENT_SECRET,
    redirect_uris: ["http://localhost:3000/oauth2callback"],
  },
};
