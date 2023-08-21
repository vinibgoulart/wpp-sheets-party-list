import { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";
import { __ } from "i18n";

export const hasSheets = async (msg: Message, next?: () => unknown) => {
  const chat = await msg.getChat();

  if (!chat.isGroup) {
    msg.reply("This command only works in groups");
    return;
  }

  const groupId = msg.id.remote;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  if (!sheets) {
    msg.reply(__("No sheets found, create one with `!sheet-create`"));
    return;
  }

  next && next();
};
