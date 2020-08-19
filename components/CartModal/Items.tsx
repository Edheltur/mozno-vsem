import React from "react";
import Link from "next/link";
import {
  Anchor,
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Text,
} from "grommet";
import { FormAdd, FormSubtract } from "grommet-icons";

import { useAppState } from "store";
import { getSelectedItems, getTotalPrice, ICart } from "common/data/cart";
import { itemsBydId, TMenuItemId } from "common/data/menu";

interface IProps {
  cart: ICart;
}

const Count = ({ id }: { id: TMenuItemId }) => {
  const { cart, dispatch } = useAppState("cart");
  const handle = React.useMemo(
    () => ({
      add: () => dispatch("cart/changeCount", { id, delta: +1 }),
      remove: () => dispatch("cart/changeCount", { id, delta: -1 }),
    }),
    [dispatch, id]
  );

  return (
    <Box direction="row" justify="stretch" align="center">
      <FormSubtract color="brand" onClick={handle.remove} />
      <Box width={{ min: "20px" }}>
        <Text size="small" textAlign="center">
          {cart.countById[id]}
        </Text>
      </Box>
      <FormAdd color="brand" onClick={handle.add} />
    </Box>
  );
};

const Title = ({ id }: { id: TMenuItemId }) => {
  const { dispatch } = useAppState();
  const handle = React.useMemo(
    () => ({
      click: () => dispatch("order/reset"),
    }),
    [dispatch, id]
  );

  return (
    <Link passHref href="/dish/[id]" as={`/dish/${id}`}>
      <Anchor onClick={handle.click}>{itemsBydId[id].title}</Anchor>
    </Link>
  );
};

export function Items({ cart }: IProps) {
  const selectedItems = getSelectedItems(cart);
  const totalPrice = getTotalPrice(cart);
  const { config } = useAppState("config");
  const { freeDeliveryFrom, deliveryPrice } = config;

  const deliveryCost = totalPrice > freeDeliveryFrom ? 0 : deliveryPrice;

  return (
    <Text size="small">
      <Table>
        <TableBody>
          {selectedItems.map(({ id, title }) => (
            <TableRow key={id}>
              <TableCell>
                <Title id={id} />
              </TableCell>
              <TableCell
                align={"end" as any}
                verticalAlign="top"
                pad={{ horizontal: "none", vertical: "xsmall" }}
              >
                <Count id={id} />
              </TableCell>
              <TableCell
                align={"end" as any}
                verticalAlign="top"
                width={{ min: "50px" } as any}
              >
                {cart.countById[id] * itemsBydId[id].price}&nbsp;₽
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>Доставка</TableCell>
            <TableCell align={"end" as any} verticalAlign="top">
              {deliveryCost}&nbsp;₽
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} style={{ borderCollapse: "separate" }}>
              Итого: {totalPrice + deliveryCost}&nbsp;₽
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Text>
  );
}
