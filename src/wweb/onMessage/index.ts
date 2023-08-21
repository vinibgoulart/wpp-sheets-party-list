import { client } from "../client";
import { hasSheets } from "../middleware/hasSheets";
import { isListening } from "../middleware/isListening";
import defaultMessage from "./defaultMessage";
import helpMessage from "./helpMessage";
import howItWorksMessage from "./howItWorksMessage";
import inputExamplesMessage from "./inputExamplesMessage";
import sheetsCreateMessage from "./sheetsCreateMessage";
import sheetsDetailMessage from "./sheetsDetailMessage";
import sheetsFinishMessage from "./sheetsFinishMessage";
import startListeningMessage from "./startListeningMessage";
import stopListeningMessage from "./stopListeningMessage";

export const onMessage = () => {
  client.on("message", async (msg) => {
    switch (msg.body) {
      case "!help":
        return helpMessage(msg);

      case "!how-it-works":
        return howItWorksMessage(msg);

      case "!input-examples":
        return inputExamplesMessage(msg);

      case "!sheet-create":
        return sheetsCreateMessage(msg);

      case "!sheet-detail":
        return hasSheets(msg, async () => {
          sheetsDetailMessage(msg);
        });

      case "!sheet-finish":
        return hasSheets(msg, async () => {
          sheetsFinishMessage(msg);
        });

      case "!start-listening":
        return hasSheets(msg, async () => {
          startListeningMessage(msg);
        });

      case "!stop-listening":
        return hasSheets(msg, async () => {
          stopListeningMessage(msg);
        });

      default:
        return isListening(msg, async () => {
          defaultMessage(msg);
        });
    }
  });
};
