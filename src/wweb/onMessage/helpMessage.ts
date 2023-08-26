import type { Message } from "whatsapp-web.js";
import { __ } from "i18n";

const helpMessage = (msg: Message) => {
  msg.reply(
    `*Commands:*
*!help*: ${__("Show all commands")}
*!hiw*: ${__("Explanation of how it works")}
*!ie*: ${__("Show name input examples")}
*!sc*: ${__("Create a sheets with Guests and Free columns")}
*!sd*: ${__("See the details of the current sheets")}
*!sf*: ${__("Ends the list, making it possible to start a new one")}

*Managing the group*
*!stop*: ${__("Stop listening to new names")}
*!start*: ${__("Start listening to new names")}
*!free*: ${__("Use replying to a message to add a name to the Free column")}
*!paid*: ${__("Use replying to a message to add a name to the Paid column")}
*!remove*: ${__("Use replying to a message to remove a name from the list")}

*Documentation*
https://github.com/vinibgoulart/wpp-sheets-party-list

*_createdBy_*: @vinibgoulart`
  );

  msg.react("👍");
};

export default helpMessage;
