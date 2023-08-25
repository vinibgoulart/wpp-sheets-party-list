import { loadTranslations } from "./i18n/loadTranslations";
import { writeCredentials } from "./sheets/service";
import { connectClient } from "./wweb/client";

export const app = () => {
  loadTranslations();
  writeCredentials();
  connectClient();
};
