import React from "react";
import Head from "next/head";

import { Box, Button, Collapsible, DataTable } from "grommet";
import { Items } from "components/CartModal/Items";
import { ICart } from "common/data/cart";
import { useIsMounted } from "client/helpers/hooks";

export interface IProps {
  orders: TOrderRow[];
}

export type TOrderRow = {
  id: number;
  dateIsoString: string;
  name: string;
  phone: string;
  address: string;
  entrance: string;
  apartment: string;
  intercomCode: string;
  floor: string;
  cart: ICart;
};

const Cart = ({ cart }: { cart: ICart }) => {
  const [isOpen, setOpen] = React.useState(false);
  const isMounted = useIsMounted();
  const handleToggle = React.useCallback(() => setOpen(!isOpen), [isOpen]);

  return (
    <Box align="start" gap="small">
      <Button
        secondary
        onClick={handleToggle}
        label={isOpen ? "Скрыть корзину" : "Показать корзину"}
      />
      {isMounted && (
        <Collapsible direction="vertical" open={isOpen}>
          <Box background="light-2" round="small">
            <Items readonly cart={cart} />{" "}
          </Box>
        </Collapsible>
      )}
    </Box>
  );
};
export const OrdersPage = ({ orders }: IProps) => {
  return (
    <>
      <Head>
        <title>Админка. Заказы</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Box style={{ maxWidth: "100vw" }}>
        <DataTable<TOrderRow>
          sortable
          resizeable
          fill
          columns={[
            {
              property: "id",
              header: "№",
              primary: true,
            },
            {
              property: "date",
              header: "Дата",
              render: ({ dateIsoString }) =>
                new Date(dateIsoString).toLocaleDateString("ru", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                }),
            },
            {
              property: "countById",
              header: "Корзина",
              sortable: false,
              render: ({ cart, id }) => <Cart cart={cart} key={id} />,
            },
            {
              property: "name",
              header: "Имя",
            },
            {
              property: "phone",
              header: "Телефон",
            },
            {
              property: "address",
              header: "Адрес",
            },
            {
              property: "entrance",
              header: "Подъезд",
            },
            {
              property: "apartment",
              header: "Квартира",
            },
            {
              property: "intercomCode",
              header: "Домофон",
            },
          ]}
          data={orders}
        />
      </Box>
    </>
  );
};

OrdersPage.commonPageProps = { disableHeader: true, disableMenu: true };
