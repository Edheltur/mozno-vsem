export interface State {
  cart: {
    countById: Record<number, number>;
  };
  order: {
    status: "new" | "cart" | "confirmed";
    id?: number;
  };
  config: {
    telegramUsername: string;
    whatsAppPhoneNumber: string;
  };
}

export interface Events {
  "order/reset": undefined;
  "order/confirm": undefined;
  "order/openCart": undefined;
  "cart/add": { id: number };
  "cart/clear": undefined;
}
