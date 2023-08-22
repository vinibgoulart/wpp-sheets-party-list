import { Message, MessageTypes } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { handleAddGuest } from "../../event/handleAddGuest";
import { middleware } from "../middleware/middleware";

const defaultMessage = async (msg: Message) => {
  if (!msg.body) {
    return;
  }

  const sanitizedNames = sanitizeNames(msg.body);

  const groupId = msg.id.remote;

  const payload = {
    groupId,
    names: sanitizedNames,
  };

  await handleAddGuest(payload);

  msg.react("👍");
};

export default middleware(defaultMessage, {
  isListening: true,
});
