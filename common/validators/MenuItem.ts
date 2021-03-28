import { itemsById, TMenuItemId } from "common/data/menu";

export function isMenuItemId(id: string): id is TMenuItemId {
  return id in itemsById;
}
