import { Message, MessageTypes } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { handleAddParticipant } from "../../event/handleAddParticipant";
import { middleware } from "../middleware/middleware";
import { EVENT_COLUMN_ENUM } from "../../event/EventColumnEnum";

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

  await handleAddParticipant(payload);

  msg.react("✅");
};

export default middleware(defaultMessage, {
  isListening: true,
});
