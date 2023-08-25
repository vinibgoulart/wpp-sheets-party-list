import { Client, LocalAuth } from "whatsapp-web.js";
import { onReady } from "./onReady";
import { onMessage } from "./onMessage";
import { onAuthFailure } from "./onAuthFailure";
import { onQrCode } from "./onQrCode";

export const client = new Client({
  authStrategy: new LocalAuth(),
  authTimeoutMs: 60 * 1000,
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

export const connectClient = () => {
  client.initialize();

  onQrCode();

  onReady();

  onAuthFailure();

  onMessage();
};
