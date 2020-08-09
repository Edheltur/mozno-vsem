import React from "react";
import { Table, TableBody, TableCell, TableFooter, TableRow } from "grommet";

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
            <TableCell>{title}</TableCell>
            <TableCell align={"end" as any}>
              x&#8239;{cart.countById[id]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            <strong>Итого: {totalPrice}&nbsp;₽</strong>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
