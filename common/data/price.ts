import { config } from "common/config";

export function getDeliveryCost(totalPrice: number) {
  const { freeDeliveryFrom, deliveryPrice } = config;

  return totalPrice > freeDeliveryFrom ? 0 : deliveryPrice;
}
