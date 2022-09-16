import React from "react";
import { Button, Paragraph } from "grommet";
import { Trash } from "grommet-icons";

import { useAppState } from "store";
import { Items } from "components/CartModal/Items";
import { getSelectedItems } from "common/data/cart";
import { Modal } from "components/ui/Modal";

export const CartModal = () => {
  const { order, cart, dispatch } = useAppState("order", "cart");
  const isOpen = order.status === "cart";
  const isEmpty = getSelectedItems(cart).length === 0;

  const handle = React.useMemo(
    () => ({
      close: () => dispatch("order/reset"),
      open: () => dispatch("order/openCart"),
      clearCart: () => {
        dispatch("cart/clear");
        dispatch("order/reset");
      },
      checkout: () => dispatch("order/checkout"),
    }),
    [dispatch]
  );

  if (!isOpen) {
    return null;
  }

  if (isEmpty) {
    return (
      <Modal onClose={handle.close}>
        <Modal.Header>Корзина</Modal.Header>
        <Modal.Content>Ваша корзина пуста</Modal.Content>
        <Modal.Controls>
          <Button
            secondary
            label="Закрыть"
            onClick={handle.close}
            type="reset"
          />
        </Modal.Controls>
      </Modal>
    );
  }

  return (
    <Modal onClose={handle.close}>
      <Modal.Header>Корзина</Modal.Header>
      <Modal.Content>
        <Items cart={cart} />
      </Modal.Content>
      <Modal.Controls>
        <Button
          secondary
          icon={<Trash />}
          onClick={handle.clearCart}
          type="reset"
        />
        <Button
          primary
          label="Оформить заказ"
          onClick={handle.checkout}
          disabled
          type="submit"
        />
        <br />
        <Paragraph size="small">Заказы временно недоступны</Paragraph>
      </Modal.Controls>
    </Modal>
  );
};
