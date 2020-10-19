import React from "react";
import { Box, Button, FormField, TextArea, TextInput } from "grommet";

import { useAppState } from "store";
import { Modal } from "components/ui/Modal";

export const UserInfoEditor = () => {
  const { user, dispatch } = useAppState("user");

  const handle = React.useMemo(
    () => ({
      nameChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        dispatch("user/update", { name: event.target.value }),
      addressChange: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
        dispatch("user/update", { address: event.target.value }),
      phoneChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        dispatch("user/update", { phone: event.target.value }),
      phoneFocus: () => {
        if (!user.phone) {
          dispatch("user/update", { phone: "+7" });
        }
      },
    }),
    [dispatch, user.address, user.phone, user.name]
  );

  return (
    <Box>
      <FormField label="Ваше имя">
        <TextInput
          inputMode="text"
          maxLength={50}
          value={user.name}
          autoComplete="name"
          onChange={handle.nameChange}
        />
      </FormField>
      <FormField label="Телефон">
        <TextInput
          inputMode="tel"
          value={user.phone}
          type="tel"
          autoComplete="tel"
          maxLength={25}
          onChange={handle.phoneChange}
          onFocus={handle.phoneFocus}
          placeholder="+7"
        />
      </FormField>
      <FormField label="Адрес доставки">
        <TextArea
          inputMode="text"
          maxLength={150}
          value={user.address}
          onChange={handle.addressChange}
          placeholder="Улица, дом, подъезд и квартира"
        />
      </FormField>
    </Box>
  );
};

export const CheckoutModal = () => {
  const { order, user, dispatch } = useAppState("order", "user");
  const isSubmitting = order.status === "submitting";
  const isOpen = order.status === "checkout" || isSubmitting;
  const hasEmptyUserFields = !user.phone || !user.address || !user.name;

  const handle = React.useMemo(
    () => ({
      reset: () => dispatch("order/reset"),
      submit: () => dispatch("order/submit"),
    }),
    [dispatch]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={handle.reset}>
      <Modal.Header>Оформление заказа</Modal.Header>
      <Modal.Content>
        <UserInfoEditor />
      </Modal.Content>
      <Modal.Controls>
        <Button
          secondary
          label="Отмена"
          onClick={handle.reset}
          disabled={isSubmitting}
          type="submit"
        />
        <Button
          primary
          label="Заказать"
          onClick={handle.submit}
          disabled={isSubmitting || hasEmptyUserFields}
          type="submit"
        />
      </Modal.Controls>
    </Modal>
  );
};
