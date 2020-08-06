import { itemsBydId, TMenuItemId } from "../data/menu";

export function isMenuItemId(id: string): id is TMenuItemId {
  return id in itemsBydId;
}
