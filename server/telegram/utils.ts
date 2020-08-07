import { TelegramClient, TelegramReporter } from "server/telegram";
import { InternalServerError } from "common/http";

export function createTelegramClient() {
  if (!process.env.TELEGRAM_BOT_SECRET) {
    throw new InternalServerError();
  }

  return new TelegramClient(
    process.env.TELEGRAM_BOT_SECRET,
    Number(process.env.TELEGRAM_API_TIMEOUT_MS ?? 2500)
  );
}

export function createTelegramReporter() {
  if (!process.env.TELEGRAM_CHANNEL_ID) {
    throw new InternalServerError();
  }

  const client = createTelegramClient();
  return new TelegramReporter(client, process.env.TELEGRAM_CHANNEL_ID);
}
