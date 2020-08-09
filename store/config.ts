import { StoreonModule } from "storeon";
import { Events, State } from "./types";

export const config: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    config: {
      telegramUsername: process.env.NEXT_PUBLIC_TELEGRAM_USER_NAME ?? "",
      whatsAppPhoneNumber: process.env.NEXT_PUBLIC_WHATS_APP_PHONE_NUMBER ?? "",
      yandexMetrika: {
        accounts: [66307693],
        options: {
          defer: true,
          webvisor: true,
        },
      },
    },
  }));
};
