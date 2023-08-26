import type { Message } from "whatsapp-web.js";
import { setSheetsInDescription } from "../setSheetsInDescription";
import { __ } from "i18n";
import { getEventDetails } from "../../event/getEventDetails";
import { middleware } from "../middleware/middleware";

const sheetsDetailMessage = async (msg: Message) => {
  const chat = await msg.getChat();

  const groupId = msg.id.remote;

  const payload = {
    groupId,
  };

  const { id, url, qty } = await getEventDetails(payload);

  msg.reply(`*${__("Sheet Detail")}:*    
ID: *${id}*
Url: *${url}*
${__("Guests")}: *${qty.guest}*
${__("Free")}: *${qty.free}*
${__("Paid")}: *${qty.paid}*
Total: *${qty.paid + qty.guest + qty.free}*`);

  msg.react("👍");

  setSheetsInDescription(chat, { sheetsUrl: url });
};

export default middleware(sheetsDetailMessage, {
  hasSheets: true,
});
