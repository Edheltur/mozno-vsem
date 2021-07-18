export const config = {
  publicUrl: "https://mozno-vsem.ru",
  freeDeliveryFrom: 2500,
  deliveryPrice: 300,
  farDeliveryPrice: 300,
  telegramUsername: process.env.NEXT_PUBLIC_TELEGRAM_USER_NAME ?? "",
  whatsAppPhoneNumber: process.env.NEXT_PUBLIC_WHATS_APP_PHONE_NUMBER ?? "",
  yandexMetrikaCounterId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER,
} as const;
