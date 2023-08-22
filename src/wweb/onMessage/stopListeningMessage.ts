import { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";
import { __ } from "i18n";
import { middleware } from "../middleware/middleware";

const stopListeningMessage = async (msg: Message) => {
  const groupId = msg.id.remote;

  await SheetModel.findOneAndUpdate(
    {
      groupId,
      removedAt: null,
    },
    {
      $set: {
        isListening: false,
      },
    }
  );

  msg.react("🔇");
};

export default middleware(stopListeningMessage, {
  hasSheets: true,
});
