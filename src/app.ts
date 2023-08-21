import { loadTranslations } from "./i18n/loadTranslations";
import { connectClient } from "./wweb/client";

export const app = () => {
  loadTranslations();
  connectClient();
};
