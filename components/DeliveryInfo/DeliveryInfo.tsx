import React from "react";
import { InfoBlock } from "components/ui/InfoBlock";
import { config } from "common/config";

export const DeliveryInfo = () => {
  return (
    <InfoBlock title="Условия доставки">
      Доставляем по четвергам и воскресеньям в&nbsp;пределах Екатеринбурга.
      Стоимость доставки&nbsp;-&nbsp;{config.deliveryPrice}&nbsp;₽.
      При&nbsp;заказе от&nbsp;{config.freeDeliveryFrom}&nbsp;₽ доставка
      бесплатная.
    </InfoBlock>
  );
};
