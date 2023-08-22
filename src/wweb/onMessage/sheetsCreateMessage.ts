import type { Message } from "whatsapp-web.js";
import { handleCreateEvent } from "../../event/handleCreateEvent";
import SheetModel from "../../sheets/SheetModel";
import { setSheetsInDescription } from "../setSheetsInDescription";
import { __ } from "i18n";

const sheetCreateMessage = async (msg: Message) => {
  const chat = await msg.getChat();

  const groupId = msg.id.remote;

  const sheetExistent = await SheetModel.findOne({
    groupId,
    removedAt: null,
  });

  if (sheetExistent) {
    msg.reply(__("Sheet already exists, use `!sd`"));
    return;
  }

  const payload = {
    title: chat.name,
    groupId,
    createdBy: msg.id.participant,
  };

  const { sheet } = await handleCreateEvent(payload);

  msg.reply(
    `*${__("Sheet Created")}:*
ID: *${sheet.sheetId}*      
Url: *${sheet.sheetUrl}*`
  );

  msg.reply(
    __(
      "Listening to new names, use `!stop` to stop listening to new names"
    )
  );

  msg.react("👍");

  chat.setSubject(`${chat.name} - In Progress`);

  setSheetsInDescription(chat, {
    sheetsUrl: sheet.sheetUrl,
  });
};

export default sheetCreateMessage;
