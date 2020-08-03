import { State } from "store/types";
import * as menu from "data/menu";

export function getTotalPrice(cart: State["cart"]): number {
  const selectedItems = getSelectedItems(cart);
  return selectedItems.reduce(
    (total, { id, price }) => total + cart.countById[id] * price,
    0
  );
}

export function getSelectedItems(cart: State["cart"]) {
  return menu.items.filter(({ id }) => id in cart.countById);
}
