import { isUser, IUser } from "common/data/user";
import { ICart, isCart } from "common/data/cart";

export interface IOrder {
  user: IUser;
  cart: ICart;
}

export function isOrder(order: any): order is IOrder {
  return isUser(order?.user) && isCart(order?.cart);
}
