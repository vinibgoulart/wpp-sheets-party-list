import { Client, LocalAuth } from "whatsapp-web.js";
import { onReady } from "./ready";
import { onMessage } from "./onMessage";
import { onAuthFailure } from "./onAuthFailure";
import { onQrCode } from "./onQrCode";

export const client = new Client({
  authStrategy: new LocalAuth(),
});

export const connectClient = () => {
  console.log("initializing client");
  client.initialize();

  onQrCode();

  onReady();

  onAuthFailure();

  onMessage();
};
