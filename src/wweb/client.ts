import { Client, LocalAuth } from "whatsapp-web.js";
import { onReady } from "./ready";
import { onMessage } from "./onMessage";
import { onAuthFailure } from "./onAuthFailure";

export const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false,
  },
});

export const connectClient = () => {
  client.initialize();

  onReady();

  onAuthFailure();

  onMessage();
};
