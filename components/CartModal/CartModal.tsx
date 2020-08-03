import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useAppState } from "store";
import * as menu from "data/menu";
import { getTotalPrice, getSelectedItems } from "store/selectors/cart";
interface IProps {
  trigger: React.ReactNode;
}

export const CartModal = ({ trigger }: IProps) => {
  const { order, cart, dispatch } = useAppState("order", "cart");
  const selectedItems = getSelectedItems(cart);
  const totalPrice = getTotalPrice(cart);

  return (
    <Modal
      closeIcon
      onClose={() => dispatch("order/reset")}
      onOpen={() => dispatch("order/openCart")}
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

          <div>Итого: {totalPrice}&nbsp;₽</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Очистить корзину"
          onClick={() => {
            dispatch("cart/clear");
            dispatch("order/reset");
          }}
          color="grey"
        />
        <Button
          content="Заказать"
          onClick={() => dispatch("order/confirm")}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
