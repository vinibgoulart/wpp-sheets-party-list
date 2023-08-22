import type { Message } from "whatsapp-web.js";
import { setSheetsInDescription } from "../setSheetsInDescription";
import { __ } from "i18n";
import { handleGetEventDetails } from "../../event/handleGetEventDetails";
import { middleware } from "../middleware/middleware";

const sheetsDetailMessage = async (msg: Message) => {
  const chat = await msg.getChat();

  const groupId = msg.id.remote;

  const payload = {
    groupId,
  };

  const { id, url, guestQty } = await handleGetEventDetails(payload);

  msg.reply(`*${__("Sheet Detail")}:*    
ID: *${id}*
Url: *${url}*
Number of participants: *${guestQty}*`);

  msg.react("👍");

  setSheetsInDescription(chat, { sheetsUrl: url });
};

export default middleware(sheetsDetailMessage, {
  hasSheets: true,
});
