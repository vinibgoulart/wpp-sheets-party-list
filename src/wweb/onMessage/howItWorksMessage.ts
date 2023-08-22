import { __ } from "i18n";
import type { Message } from "whatsapp-web.js";

const howItWorksMessage = (msg: Message) => {
  msg.reply(
    `${__(
      "This is a bot for you to create the integration of the excel list of your party's guests with the whatsapp group"
    )}

${__(
  "You can only have one list in progress per group, if there is a list in progress it will be displayed in the title of the group *In Progress*"
)}

${__("You can look up commands on sheets using `!help`")}

${__(
  "When a list is in progress, all messages sent in the group will be sent to excel, so it is recommended that there are no parallel conversations other than names in the group"
)}

${__(
  "You can submit names in several ways, send `!ie` to see all accepted forms"
)}

${__(
  "When creating an event, you create it with the *Guests* and *Free* column"
)}

${__(
  "All names are inserted in the Guests column, to insert one in the Free column, send the prefix `!free` in your message, see more by running `!help`"
)}

${__(
  "You can make the bot stop listening for new names by running the `/stop` command, don't forget to call again when you want to send new names"
)}

${__(
  "All successful operations are reacted by the bot with an emoji, if not, contact whoever is organizing the event to find out the status of the list."
)}

${__(
  "All names are accepted and formatted for capital case, in addition to being automatically organized in alphabetical order"
)}`
  );

  msg.react("👍");
};

export default howItWorksMessage;
