import { TMenuItemId } from "common/data/menu";
import { ICart } from "common/data/cart";
import { TUser } from "common/data/user";

export interface State {
  cart: ICart;
  order: {
    status: "new" | "cart" | "checkout" | "submitting" | "confirmed";
    id?: number;
  };
  user: TUser;
}

export interface Events {
  "order/reset": undefined;
  "order/confirm": { orderId: number };
  "order/submit": undefined;
  "order/checkout": undefined;
  "order/openCart": undefined;
  "cart/changeCount": { id: TMenuItemId; delta: number };
  "cart/clear": undefined;
  "user/update": Partial<State["user"]>;
}
