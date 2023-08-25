import { writeCredentials } from "./google/writeCredentials";
import { loadTranslations } from "./i18n/loadTranslations";
import { connectClient } from "./wweb/client";

export const app = () => {
  loadTranslations();
  writeCredentials();
  connectClient();
};
