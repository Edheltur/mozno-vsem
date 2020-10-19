import { TMenuItemId } from "common/data/menu";
import { ICart } from "common/data/cart";
import { IUser } from "common/data/user";

export interface State {
  cart: ICart;
  order: {
    status: "new" | "cart" | "checkout" | "submitting" | "confirmed";
    id?: number;
  };
  user: IUser;
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
