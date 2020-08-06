import { ICart } from "store/types";
import * as menu from "common/data/menu";

export function getTotalPrice(cart: ICart): number {
  const selectedItems = getSelectedItems(cart);
  return selectedItems.reduce(
    (total, { id, price }) => total + cart.countById[id] * price,
    0
  );
}

export function getSelectedItems(cart: ICart) {
  return menu.items.filter(({ id }) => id in cart.countById);
}
