import { Message, MessageTypes } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { addParticipants } from "../../event/addParticipants";
import { middleware } from "../middleware/middleware";
import { EVENT_COLUMN_ENUM } from "../../event/enum/EventColumnEnum";

const defaultMessage = async (msg: Message) => {
  if (!msg.body) {
    return;
  }

  const sanitizedNames = sanitizeNames(msg.body);

  const groupId = msg.id.remote;

  const payload = {
    groupId,
    names: sanitizedNames,
    column: EVENT_COLUMN_ENUM.GUEST,
  };

  await addParticipants(payload);

  msg.react("✅");
};

export default middleware(defaultMessage, {
  isListening: true,
});
