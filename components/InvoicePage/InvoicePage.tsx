import React from "react";
import Head from "next/head";
import Error from "next/error";

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "grommet";
import {
  getItemCountInCart,
  getSelectedItems,
  getTotalPrice,
  ICart,
} from "common/data/cart";
import { getDeliveryCost } from "common/data/price";
import { IClientInfo, getCombinedAddress } from "common/data/clientInfo";

import styles from "./InvoicePage.module.css";

interface IProps {
  id: number;
  clientInfo: IClientInfo;
  cart: ICart;
}

function ClientInfoRow({
  title,
  value,
}: {
  title: string;
  value: string | null;
}) {
  if (value === null) {
    return null;
  }
  return (
    <TableRow>
      <TableCell verticalAlign="top">{title}</TableCell>
      <TableCell style={{ maxWidth: 400 }}>{value}</TableCell>
    </TableRow>
  );
}

function ClientInfo({ name, phone, ...addressFields }: IClientInfo) {
  return (
    <span>
      <Table>
        <TableBody>
          <ClientInfoRow title="Клиент" value={name} />
          <ClientInfoRow title="Телефон" value={phone} />
          <ClientInfoRow
            title="Адрес"
            value={getCombinedAddress(addressFields)}
          />
        </TableBody>
      </Table>
    </span>
  );
}

function Invoice({ cart }: { cart: ICart }) {
  const totalPrice = getTotalPrice(cart);
  const deliveryCost = getDeliveryCost(totalPrice);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>☑</TableCell>
          <TableCell>Наименование</TableCell>
          <TableCell>Кол-во</TableCell>
          <TableCell>Стоимость</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {getSelectedItems(cart).map(({ id, price, title }) => {
          const count = getItemCountInCart(cart, id);
          return (
            <TableRow key={id}>
              <TableCell>☐</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>{count * price}</TableCell>
            </TableRow>
          );
        })}
        {deliveryCost > 0 && (
          <TableRow>
            <TableCell />
            <TableCell colSpan={2}>Доставка</TableCell>
            <TableCell>{deliveryCost}</TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell />
          <TableCell colSpan={2}>
            <strong>Итого:</strong>
          </TableCell>
          <TableCell>{totalPrice + deliveryCost}&nbsp;₽</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export const InvoicePage = (props: IProps | {}) => {
  if (!("id" in props)) {
    return <Error statusCode={404} />;
  }

  const { id, clientInfo, cart } = props;
  return (
    <>
      <Head>
        <title>Админка. Заказ №{id}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Box alignContent="start" margin={{ vertical: "medium" }}>
        <h1>Заказ №{id}</h1>
        <ClientInfo {...clientInfo} />
        <h3>Перечень товаров</h3>
        <Invoice cart={cart} />
        <Box
          alignSelf="end"
          margin={{ top: "medium" }}
          className={styles.InvoicePage__controls}
        >
          <Button label="Распечатать" onClick={global.print} />
        </Box>
      </Box>
    </>
  );
};

InvoicePage.commonPageProps = { disableHeader: true, disableMenu: true };
