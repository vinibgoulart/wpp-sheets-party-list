import { Message } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { EVENT_COLUMN_ENUM } from "../../event/enum/EventColumnEnum";
import { middleware } from "../middleware/middleware";
import { handleRemoveParticipants } from "../../event/handleRemoveParticipants";

const removeMessage = async (msg: Message) => {
  const quotedMessage = await msg.getQuotedMessage();

  const sanitizedNames = sanitizeNames(quotedMessage.body);

  const groupId = msg.id.remote;

  const payload = {
    groupId,
    names: sanitizedNames,
    column: EVENT_COLUMN_ENUM.GUEST,
  };

  await handleRemoveParticipants(payload);

  msg.react("❌");
};

export default middleware(removeMessage, {
  hasSheets: true,
});
