import React from "react";
import Head from "next/head";
import Error from "next/error";

import { Anchor, Box, Button, Collapsible, DataTable } from "grommet";
import { Items } from "components/CartModal/Items";
import { ICart } from "common/data/cart";
import { useIsMounted } from "client/helpers/hooks";
import { IClientInfo, getCombinedAddress } from "common/data/clientInfo";

interface IProps {
  orders?: TOrderRow[];
}

type TOrderRow = {
  id: number;
  dateIsoString: string;
  sum: number;
  cart: ICart;
  clientInfo: IClientInfo;
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
  if (!orders) {
    return <Error statusCode={404} />;
  }
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
              render: ({ id }) => (
                <Anchor target="_blank" href={`/admin/invoice/${id}`}>
                  {id}
                </Anchor>
              ),
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
              property: "cart",
              header: "Корзина",
              sortable: false,
              render: ({ cart, id }) => <Cart cart={cart} key={id} />,
            },
            {
              property: "sum",
              header: "Сумма",
            },
            {
              property: "clientInfo.name",
              header: "Имя",
            },
            {
              property: "phone",
              header: "Телефон",
              render: ({ clientInfo: { phone } }) => (
                <Anchor href={"tel:" + phone}>{phone}</Anchor>
              ),
            },
            {
              property: "address",
              header: "Адрес",
              render: ({ clientInfo }) => getCombinedAddress(clientInfo),
            },
          ]}
          data={orders}
        />
      </Box>
    </>
  );
};

OrdersPage.commonPageProps = {
  disableHeader: true,
  disableMenu: true,
  noIndex: true,
};
