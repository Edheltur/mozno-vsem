import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Text,
} from "grommet";

import { getSelectedItems, getTotalPrice, ICart } from "common/data/cart";

interface IProps {
  cart: ICart;
}

export function Items({ cart }: IProps) {
  const selectedItems = getSelectedItems(cart);
  const totalPrice = getTotalPrice(cart);

  return (
    <Table>
      <TableBody>
        {selectedItems.map(({ id, title }) => (
          <TableRow key={id}>
            <TableCell>
              <Text size="small">{title}</Text>
            </TableCell>
            <TableCell align={"end" as any}>
              <Text size="small">x&#8239;{cart.countById[id]}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            <Text size="small" weight={500}>
              Итого: {totalPrice}&nbsp;₽
            </Text>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
