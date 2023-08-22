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

      case "!hiw":
        return howItWorksMessage(msg);

      case "!ie":
        return inputExamplesMessage(msg);

      case "!sc":
        return sheetsCreateMessage(msg);

      case "!sd":
        return sheetsDetailMessage(msg);

      case "!sf":
        return sheetsFinishMessage(msg);

      case "!start":
        return startListeningMessage(msg);

      case "!stop":
        return stopListeningMessage(msg);

      default:
        return defaultMessage(msg);
    }
  });
};
