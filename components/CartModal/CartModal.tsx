import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useAppState } from "store";
import { getSelectedItems, getTotalPrice } from "store/selectors/cart";
import { Icon } from "components/ui/Icon";

interface IProps {
  trigger: React.ReactNode;
}

export const CartModal = ({ trigger }: IProps) => {
  const { order, cart, dispatch } = useAppState("order", "cart");
  const selectedItems = getSelectedItems(cart);
  const totalPrice = getTotalPrice(cart);

  const handle = React.useMemo(
    () => ({
      close: () => dispatch("order/reset"),
      open: () => dispatch("order/openCart"),
      clearCart: () => {
        dispatch("cart/clear");
        dispatch("order/reset");
      },
      confirm: () => dispatch("order/confirm"),
    }),
    [dispatch]
  );

  return (
    <Modal
      closeIcon={<Icon icon="times" className="close icon" />}
      onClose={handle.close}
      onOpen={handle.open}
      open={order.status === "cart"}
      trigger={trigger}
    >
      <Modal.Header>Корзина</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {selectedItems.map(({ id, title }) => (
            <div key={id}>
              {cart.countById[id]} x {title}
            </div>
          ))}
          <br />
          <div>Итого: {totalPrice}&nbsp;₽</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Очистить корзину"
          onClick={handle.clearCart}
          color="grey"
        />
        <Button content="Заказать" onClick={handle.confirm} positive />
      </Modal.Actions>
    </Modal>
  );
};
