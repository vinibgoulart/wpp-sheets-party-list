import { Message } from "whatsapp-web.js";
import { sanitizeNames } from "../../utils/sanitizeNames";
import { addParticipants } from "../../event/addParticipants";
import { EVENT_COLUMN_ENUM } from "../../event/enum/EventColumnEnum";
import { middleware } from "../middleware/middleware";

const paidMessage = async (msg: Message) => {
  const quotedMessage = await msg.getQuotedMessage();

  const sanitizedNames = sanitizeNames(quotedMessage.body);

  const groupId = msg.id.remote;

  const payload = {
    groupId,
    names: sanitizedNames,
    column: EVENT_COLUMN_ENUM.PAID,
  };

  await addParticipants(payload);

  msg.react("💸");
};

export default middleware(paidMessage, {
  hasSheets: true,
});
