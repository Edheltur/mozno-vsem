import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useAppState } from "store/index";

export const OrderSuccessModal = () => {
  const { order, config, dispatch } = useAppState("order", "config");
  const text = encodeURIComponent(
    `Добрый день! Мой номер заказа - ${order.id}.`
  );

  const handle = React.useMemo(
    () => ({
      close: () => dispatch("order/reset"),
    }),
    [dispatch]
  );

  return (
    <Modal open={order.status === "confirmed"}>
      <Modal.Header>Ваш заказ №{order.id} создан!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Мы получили информацию о вашем заказе! Чтобы перейти к оформлению,
            сообщите нам номер заказа в любом из мессенджеров.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Telegram"
          as="a"
          target="_blank"
          href={`https://t.me/${config.telegramUsername}`}
          onClick={handle.close}
          color="blue"
        />
        <Button
          content="Whats App"
          as="a"
          target="_blank"
          href={`https://wa.me/${config.whatsAppPhoneNumber}?text=${text}`}
          onClick={handle.close}
          color="green"
        />
      </Modal.Actions>
    </Modal>
  );
};
