import React from "react";

import { Button } from "grommet";

import { useAppState } from "store";
import { Modal } from "components/ui/Modal";

export const OrderSuccessModal = () => {
  const { order, config, dispatch } = useAppState("order", "config");
  const messageText = encodeURIComponent(
    `Добрый день! Мой номер заказа - ${order.id}.`
  );

  const handle = React.useMemo(
    () => ({
      close() {
        dispatch("order/reset");
        dispatch("cart/clear");
      },
    }),
    [dispatch]
  );

  if (order.status !== "confirmed") {
    return null;
  }

  return (
    <Modal>
      <Modal.Header>Ваш заказ №&#8239;{order.id} создан!</Modal.Header>
      <Modal.Content>
        Мы получили информацию о вашем заказе! Чтобы перейти к оформлению,
        сообщите нам номер заказа в любом из мессенджеров.
      </Modal.Content>
      <Modal.Controls>
        <Button
          as="a"
          target="_blank"
          children="WhatsApp"
          href={`https://wa.me/${config.whatsAppPhoneNumber}?text=${messageText}`}
          onClick={handle.close}
          color="whatsapp"
        />
        <Button
          as="a"
          target="_blank"
          children="Telegram"
          href={`https://t.me/${config.telegramUsername}`}
          onClick={handle.close}
          color="telegram"
        />
      </Modal.Controls>
    </Modal>
  );
};
