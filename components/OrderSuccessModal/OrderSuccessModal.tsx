import React from "react";

import { Button, Text } from "grommet";

import { useAppState } from "store";
import { Modal } from "components/ui/Modal";
import { GOALS, useYandexMetrika } from "client/helpers/yandex-metrika";

export const OrderSuccessModal = () => {
  const { order, config, dispatch } = useAppState("order", "config");
  const { reachGoal } = useYandexMetrika();

  const messageText = encodeURIComponent(
    `Добрый день! Мой номер заказа - ${order.id}.`
  );

  const handle = React.useMemo(
    () => ({
      messengerLinkClick() {
        reachGoal(GOALS.orderComplete);
      },
      close() {
        dispatch("order/reset");
        dispatch("cart/clear");
      },
    }),
    [dispatch, reachGoal]
  );

  if (order.status !== "confirmed") {
    return null;
  }

  return (
    <Modal onClose={handle.close}>
      <Modal.Header>Ваш заказ №&#8239;{order.id} создан!</Modal.Header>
      <Modal.Content>
        <Text size="small">
          Мы получили информацию о вашем заказе! Чтобы перейти к оформлению,
          сообщите нам номер заказа в любом из мессенджеров.
        </Text>
      </Modal.Content>
      <Modal.Controls>
        <Button
          target="_blank"
          children="WhatsApp"
          href={`https://wa.me/${config.whatsAppPhoneNumber}?text=${messageText}`}
          onClick={handle.messengerLinkClick}
          color="whatsapp"
        />
        <Button
          target="_blank"
          children="Telegram"
          href={`https://t.me/${config.telegramUsername}`}
          onClick={handle.messengerLinkClick}
          color="telegram"
        />
      </Modal.Controls>
    </Modal>
  );
};
