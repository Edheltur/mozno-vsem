import { TMenuItemId } from "common/data/menu";
import { ICart } from "common/data/cart";

export interface State {
  cart: ICart;
  order: {
    status: "new" | "cart" | "submitting" | "confirmed";
    id?: number;
  };
  config: {
    telegramUsername: string;
    whatsAppPhoneNumber: string;
  };
}

export interface Events {
  "order/reset": undefined;
  "order/confirm": { orderId: number };
  "order/submit": undefined;
  "order/openCart": undefined;
  "cart/add": { id: TMenuItemId };
  "cart/clear": undefined;
}
