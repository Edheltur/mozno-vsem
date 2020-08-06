import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useAppState } from "store";
import { Icon } from "components/ui/Icon";
import { Description } from "components/CartModal/Description";

interface IProps {
  trigger: React.ReactNode;
}

export const CartModal = ({ trigger }: IProps) => {
  const { order, dispatch } = useAppState("order", "cart");

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

  const isSubmitting = order.status === "submitting";
  const isOpen = order.status === "cart" || isSubmitting;
  const closeProps = isSubmitting
    ? null
    : {
        closeIcon: <Icon icon="times" className="close icon" />,
        onClose: handle.close,
      };

  return (
    <Modal {...closeProps} onOpen={handle.open} open={isOpen} trigger={trigger}>
      <Modal.Header>Корзина</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Description />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Очистить корзину"
          onClick={handle.clearCart}
          disabled={isSubmitting}
          color="grey"
        />
        <Button
          content="Заказать"
          onClick={handle.submit}
          disabled={isSubmitting}
          loading={isSubmitting}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
