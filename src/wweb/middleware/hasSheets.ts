import { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";
import { __ } from "i18n";

export const hasSheets = async (msg: Message) => {
  const chat = await msg.getChat();

  if (!chat.isGroup) {
    msg.reply("This command only works in groups");
    return false;
  }

  const groupId = msg.id.remote;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  if (!sheets) {
    msg.reply(__("No sheets found, create one with `!sc`"));
    return false;
  }

  return true;
};
