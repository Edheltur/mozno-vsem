import React from "react";
import { InfoBlock } from "components/ui/InfoBlock";
import { Anchor } from "grommet";

export const Contacts = () => (
  <InfoBlock title="Кто мы?">
    Мы занимаемся приготовлением и&nbsp;доставкой полезных полуфабрикатов.
    Не&nbsp;используем вредные добавки, только натуральные специи
    и&nbsp;пряности. А&nbsp;ещё у&nbsp;нас есть
    <Anchor href="https://www.instagram.com/mozno_vsem">Instagram</Anchor>.
  </InfoBlock>
);
