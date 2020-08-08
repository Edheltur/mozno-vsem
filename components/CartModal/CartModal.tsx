import React from "react";
import { Button } from "grommet";

import { useAppState } from "store";
import { Items } from "components/CartModal/Items";
import { getSelectedItems } from "common/data/cart";
import { Modal } from "components/ui/Modal";

export const CartModal = () => {
  const { order, cart, dispatch } = useAppState("order", "cart");
  const isSubmitting = order.status === "submitting";
  const isOpen = order.status === "cart" || isSubmitting;
  const isEmpty = getSelectedItems(cart).length === 0;

  const handle = React.useMemo(
    () => ({
      close: () => dispatch("order/reset"),
      open: () => dispatch("order/openCart"),
      clearCart: () => {
        dispatch("cart/clear");
        dispatch("order/reset");
      },
      submit: () => dispatch("order/submit"),
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
          label="Очистить корзину"
          onClick={handle.clearCart}
          disabled={isSubmitting}
          type="reset"
        />
        <Button
          primary
          label="Заказать"
          onClick={handle.submit}
          disabled={isSubmitting}
          type="submit"
        />
      </Modal.Controls>
    </Modal>
  );
};
