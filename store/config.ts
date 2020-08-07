import { StoreonModule } from "storeon";
import { Events, State } from "store/types";

export const config: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    config: {
      telegramUsername: process.env.NEXT_PUBLIC_TELEGRAM_USER_NAME ?? "",
      whatsAppPhoneNumber: process.env.NEXT_PUBLIC_WHATS_APP_PHONE_NUMBER ?? "",
    },
  }));
};
