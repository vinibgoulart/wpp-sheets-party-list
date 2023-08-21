import { Message } from "whatsapp-web.js";
import SheetModel from "../../sheets/SheetModel";
import { __ } from "i18n";

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

  msg.reply(__("Stopped listening to new names"));

  msg.react("👍");
};

export default stopListeningMessage
