import { StoreonModule } from "storeon";
import { Events, State } from "./types";

export const config: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    config: {
      freeDeliveryFrom: 2000,
      deliveryPrice: 200,
      telegramUsername: process.env.NEXT_PUBLIC_TELEGRAM_USER_NAME ?? "",
      whatsAppPhoneNumber: process.env.NEXT_PUBLIC_WHATS_APP_PHONE_NUMBER ?? "",
      yandexMetrikaCounterId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER,
    },
  }));
};
