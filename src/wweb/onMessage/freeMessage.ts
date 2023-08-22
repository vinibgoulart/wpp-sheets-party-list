import { Message } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { handleAddParticipant } from "../../event/handleAddParticipant";
import { EVENT_COLUMN_ENUM } from "../../event/EventColumnEnum";

const freeMessage = async (msg: Message) => {
  const quotedMessage = await msg.getQuotedMessage();

  const sanitizedNames = sanitizeNames(quotedMessage.body);

  const groupId = msg.id.remote;

  const payload = {
    groupId,
    names: sanitizedNames,
    column: EVENT_COLUMN_ENUM.FREE,
  };

  await handleAddParticipant(payload);

  msg.react("👍");
};

export default freeMessage;
