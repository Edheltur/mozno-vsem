import React from "react";
import { InfoBlock } from "components/ui/InfoBlock";
import { config } from "common/config";

export const DeliveryInfo = () => {
  return (
    <InfoBlock title="Условия доставки">
      <p>
        Доставляем по четвергам и воскресеньям в&nbsp;пределах Екатеринбурга.
        Стоимость доставки&nbsp;-&nbsp;{config.deliveryPrice}&nbsp;₽.
        При&nbsp;заказе от&nbsp;{config.freeDeliveryFrom}&nbsp;₽ доставка будет
        бесплатной.
      </p>
      <p>
        По индивидуальной договорённости доставим в&nbsp;коттеджные посёлки
        и&nbsp;города-спутники в&nbsp;радиусе 20&nbsp;км. Стоимость доставки
        составит {config.deliveryPrice}&nbsp;₽.
      </p>
    </InfoBlock>
  );
};
