import type { Message } from "whatsapp-web.js";
import { __ } from "i18n";

const helpMessage = (msg: Message) => {
  msg.reply(
    `*Commands:*
*!help*: ${__("Show all commands")}
*!how-it-works*: ${__("Explanation of how it works")}
*!input-examples*: ${__("Show name input examples")}
*!sheet-create*: ${__("Create a sheets with Guests and Free columns")}
*!sheet-detail*: ${__("See the details of the current sheets")}
*!sheet-finish*: ${__("Ends the list, making it possible to start a new one")}
*!stop-listening*: ${__("Stop listening to new names")}
*!start-listening*: ${__("Start listening to new names")}
*!free*: ${__("Add names in free column of current list")}

*Documentation*
https://github.com/vinibgoulart/wpp-sheets-party-list

*_createdBy_*: @vinibgoulart`
  );

  msg.react("👍");
};

export default helpMessage;
