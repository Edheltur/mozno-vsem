import React from "react";
import { Anchor, Table, TableBody, TableCell, TableRow } from "grommet";
import { InfoBlock } from "components/ui/InfoBlock";

const Row: React.FC<{ title: string }> = ({ title, children }) => (
  <TableRow>
    <TableCell align="right" verticalAlign="top">
      <strong>{title}</strong>
    </TableCell>
    <TableCell width={{ min: "xxsmall", max: "large" } as any}>
      {children}
    </TableCell>
  </TableRow>
);

export const Requisites = () => (
  <InfoBlock title="Наши реквизиты" maxWidth="large">
    <Table>
      <TableBody>
        <Row title="Полное наименование">
          Общество с ограниченной ответственностью «Вигор»
        </Row>
        <Row title="Сокращенное наименование">ООО «Вигор»</Row>
        <Row title="Адрес юридический">
          623380, г. Полевской Свердловской области, ул. Бажова, д. 1А
        </Row>
        <Row title="Адрес фактический">
          623380, г. Полевской Свердловской области, ул. Бажова, д. 1А
        </Row>
        <Row title="Адрес почтовый">
          623380, г. Полевской Свердловской области, ул. Бажова, д. 1А
        </Row>

        <Row title="Электронный адрес">
          <Anchor href="mailto:info@vigor-pc.ru">info@vigor-pc.ru</Anchor>
        </Row>
        <Row title="Телефоны">
          <Anchor href="tel:+7(922)120-37-37">+7(922)120-37-37</Anchor>
          <br />
          <Anchor href="tel:+7(34350)2-39-88">+7(34350)2-39-88</Anchor>
        </Row>
        <Row title="ФИО руководителя">Перевалов Сергей Степанович</Row>
        <Row title="ФИО главного бухгалтера">Перевалов Сергей Степанович</Row>
        <Row title="ОГРН">1169658104098</Row>
        <Row title="ОКПО">04540118</Row>
        <Row title="ИНН">6679098981</Row>
        <Row title="КПП">667901001</Row>
        <Row title="Банковские реквизиты">
          р/сч 40702810016540090406
          <br />
          УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК
          <br />
          БИК: 046577674
          <br />
          к/с 30101810500000000674
          <br />
        </Row>
      </TableBody>
    </Table>
  </InfoBlock>
);
