import type { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";
import { __ } from "i18n";
import { middleware } from "../middleware/middleware";

const startListeningMessage = async (msg: Message) => {
  const groupId = msg.id.remote;

  await SheetModel.findOneAndUpdate(
    {
      groupId,
      removedAt: null,
    },
    {
      $set: {
        isListening: true,
      },
    }
  );

  msg.reply(__("Listening to new names"));

  msg.react("👍");
};

export default middleware(startListeningMessage, {
  hasSheets: true,
});
