import type { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";
import { __ } from "i18n";
import { handleGetEventDetails } from "../../event/handleGetEventDetails";
import { middleware } from "../middleware/middleware";

const sheetsFinishMessage = async (msg: Message) => {
  const chat = await msg.getChat();

  const groupId = msg.id.remote;

  const payload = {
    groupId,
  };

  const { qty } = await handleGetEventDetails(payload);

  const sheets = await SheetModel.findOneAndUpdate(
    {
      groupId,
      removedAt: null,
    },
    {
      $set: {
        removedAt: new Date(),
        isListening: false,
      },
    }
  );

  msg.reply(
    `*${__("Sheet Finished")}:*
ID: *${sheets!.sheetId}*
Url: *${sheets!.sheetUrl}*
Guest: *${qty.guest}*
Free: *${qty.free}*
Paid: *${qty.paid}*
Total: *${qty.paid + qty.guest + qty.free}*`
  );

  msg.react("👍");

  const nameWithoutLabel = chat.name.split(" - ")[0];

  if (nameWithoutLabel) {
    chat.setSubject(nameWithoutLabel);
  }
};

export default middleware(sheetsFinishMessage, {
  hasSheets: true,
});
