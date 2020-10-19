import * as menu from "common/data/menu";
import { isInteger, isMenuItemId, isObject } from "common/validators";

export interface ICart {
  countById: Record<string, number>;
}

export function getTotalPrice(cart: ICart): number {
  const selectedItems = getSelectedItems(cart);
  return selectedItems.reduce(
    (total, { id, price }) => total + cart.countById[id] * price,
    0
  );
}

export function getSelectedItems(cart: ICart) {
  return menu.items.filter(
    ({ id }) => id in cart.countById && cart.countById[id] !== 0
  );
}

export function getItemCountInCart(cart: ICart, id: string) {
  return cart.countById[id] ?? 0;
}

export function isCart(cart: any): cart is ICart {
  return isObject(cart.countById, isMenuItemId, isInteger);
}
