import { LOCALE_ENUM } from "./localeEnum";
import i18n from "i18n";

export const setLocale = (locale: LOCALE_ENUM) => {
  i18n.setLocale(locale);
};
