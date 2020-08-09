import { TMenuItemId } from "common/data/menu";
import { ICart } from "common/data/cart";

export interface IYandexMetrikaConfig {
  accounts: number[];
  options?: object;
}

export interface State {
  cart: ICart;
  order: {
    status: "new" | "cart" | "submitting" | "confirmed";
    id?: number;
  };
  config: {
    telegramUsername: string;
    whatsAppPhoneNumber: string;
    yandexMetrika: IYandexMetrikaConfig;
  };
}

export interface Events {
  "order/reset": undefined;
  "order/confirm": { orderId: number };
  "order/submit": undefined;
  "order/openCart": undefined;
  "cart/changeCount": { id: TMenuItemId; delta: number };
  "cart/clear": undefined;
}
