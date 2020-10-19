import type { TOrdersEndpoint } from "pages/api/order";
import { fetchApi } from "client/helpers/api";
import { IOrder } from "common/data/order";

export const createOrder = (order: IOrder) =>
  fetchApi<TOrdersEndpoint, "POST">("/api/order", "POST", order);
