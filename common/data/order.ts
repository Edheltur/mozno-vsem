import { isUser, TUser } from "common/data/user";
import { ICart, isCart } from "common/data/cart";

export type TOrder = {
  user: TUser;
  cart: ICart;
};

type A = Parameters<any>
export function isOrder(order: any): order is TOrder {
  return isUser(order?.user) && isCart(order?.cart);
}
