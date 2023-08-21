import path from "path";
import i18n from "i18n";
import { setLocale } from "./setLocale";
import { LOCALE_ENUM } from "./localeEnum";

export const loadTranslations = () => {
  i18n.configure({
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR",
    directory: path.join(__dirname, "locales"),
    objectNotation: true,
  });

  setLocale(LOCALE_ENUM.PT_BR);
};
