import type { TOrdersEndpoint } from "pages/api/order";
import { fetchApi } from "client/helpers/api";
import { TOrder } from "common/data/order";

export const createOrder = (order: TOrder) =>
  fetchApi<TOrdersEndpoint, "POST">("/api/order", "POST", order);
