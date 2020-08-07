import type { TOrdersEndpoint } from "pages/api/order";
import { fetchApi } from "client/helpers/api";
import { ICart } from "store/selectors/cart";

export const createOrder = (cart: ICart) =>
  fetchApi<TOrdersEndpoint, "POST">("/api/order", "POST", cart);
