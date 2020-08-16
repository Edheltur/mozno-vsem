import React from "react";
import { InfoBlock } from "components/ui/InfoBlock";
import { useAppState } from "store";

export const DeliveryInfo = () => {
  const { config } = useAppState("config");
  return (
    <InfoBlock title="Условия доставки">
      Доставляем каждый четверг в&nbsp;пределах Екатеринбурга. Стоимость
      доставки&nbsp;-&nbsp;{config.deliveryPrice}&nbsp;₽. При&nbsp;заказе
      от&nbsp;{config.freeDeliveryFrom}&nbsp;₽ доставка бесплатная.
    </InfoBlock>
  );
};
