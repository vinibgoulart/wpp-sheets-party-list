import { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";

export const isListening = async (msg: Message) => {
  const chat = await msg.getChat();

  if (!chat.isGroup) {
    msg.reply("This command only works in groups");
    return false;
  }

  const groupId = msg.id.remote;

  const sheets = await SheetModel.findOne({
    groupId,
    removedAt: null,
    isListening: true,
  });

  if (!sheets) {
    return false;
  }

  return true;
};
