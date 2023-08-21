import type { Message } from "whatsapp-web.js";
import { __ } from "i18n";

const inputExamplesMessage = (msg: Message) => {
  msg.reply(
    `
    ${__("Names separated by commas")}:
    *Vinicius Goulart, Joao, Maria, pedro, Paula*

    ${__("Names separated by line breaks")}:
    *Vinicius Goulart*
    *Joao*
    *Maria*
    *pedro*
    *Paula*

    ${__("Names with a hyphen or number at the beginning")}:
    *1- Vinicius Goulart*
    *2 Joao*
    *3-Maria*
    *4 pedro*
    *- Paula*
      
    ${__("All names are accepted and formatted for capital case, in addition to being automatically organized in alphabetical order")}`
  );

  msg.react("👍");
};

export default inputExamplesMessage;
