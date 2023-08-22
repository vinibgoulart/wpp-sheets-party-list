import { Message } from "whatsapp-web.js";
import { hasSheets as _hasSheets } from "./hasSheets";
import { isListening as _isListening } from "./isListening";

type MiddlewareOptions = {
  hasSheets?: boolean;
  isListening?: boolean;
};

export const middleware = (
  next: (msg: Message) => unknown,
  { hasSheets = false, isListening = false }: MiddlewareOptions
) => {
  return async (msg: Message) => {
    if (hasSheets) {
      const sheets = await _hasSheets(msg);

      if (!sheets) {
        return;
      }

      return next(msg);
    }

    if (isListening) {
      const listening = await _isListening(msg);

      if (!listening) {
        return;
      }

      return next(msg);
    }

    return next(msg);
  };
};
