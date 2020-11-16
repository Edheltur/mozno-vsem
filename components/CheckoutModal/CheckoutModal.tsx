import React from "react";
import {
  Box,
  Button,
  FormField,
  TextArea,
  TextInput,
  Form,
  ThemeContext,
  ResponsiveContext,
} from "grommet";

import { useAppState } from "store";
import { Modal } from "components/ui/Modal";
import { TUser, User } from "common/data/user";

const NarrowUserFormTheme = { formField: { margin: "none" } } as const;
const DefaultUserFormTheme = {} as const;

export const UserInfoEditor = () => {
  const { user, dispatch } = useAppState("user");

  const handle = React.useMemo(
    () => ({
      change: (value: unknown) => {
        dispatch("user/update", value as TUser);
      },
    }),
    [dispatch]
  );
  const size = React.useContext(ResponsiveContext);

  return (
    <ThemeContext.Extend
      value={size === "xxsmall" ? NarrowUserFormTheme : DefaultUserFormTheme}
    >
      <Form onChange={handle.change} value={user}>
        <FormField
          label="Ваше имя"
          name="name"
          component={TextInput}
          inputMode="text"
          autoComplete="name"
          maxLength={User.name.maxLength}
        />
        <FormField
          label="Телефон"
          name="phone"
          component={TextInput}
          inputMode="tel"
          type="tel"
          autoComplete="tel"
          maxLength={User.phone.maxLength}
          placeholder="+7 (9XX) XXX-XX-XX"
        />
        <FormField
          label="Адрес доставки"
          component={TextArea}
          name="address"
          inputMode="text"
          maxLength={User.address.maxLength}
          placeholder="Улица и дом"
        />
        <Box direction="row" justify="around" gap="medium">
          <FormField
            component={TextInput}
            label="Подъезд"
            name="entrance"
            inputMode="text"
            type="text"
            maxLength={User.entrance.maxLength}
          />
          <FormField
            component={TextInput}
            label="Домофон"
            name="intercomCode"
            inputMode="text"
            type="text"
            maxLength={User.intercomCode.maxLength}
          />
        </Box>

        <Box direction="row" justify="around" gap="medium">
          <FormField
            component={TextInput}
            label="Этаж"
            name="floor"
            inputMode="numeric"
            type="number"
            maxLength={User.floor.maxLength}
          />
          <FormField
            component={TextInput}
            label="Кв. / офис"
            name="apartment"
            inputMode="text"
            type="text"
            maxLength={User.apartment.maxLength}
          />
        </Box>
      </Form>
    </ThemeContext.Extend>
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
