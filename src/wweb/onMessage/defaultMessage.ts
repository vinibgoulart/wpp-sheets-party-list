import { Message, MessageTypes } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { handleAddGuest } from "../../event/handleAddGuest";

const defaultMessage = async (msg: Message) => {
  if (msg.type !== MessageTypes.TEXT) {
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

export default defaultMessage;
