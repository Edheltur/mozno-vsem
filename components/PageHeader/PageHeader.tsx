import React from "react";

import { useAppState } from "store";
import { Logo } from "components/Logo";
import { getSelectedItems } from "common/data/cart";
import { Cart } from "grommet-icons";
import { Box, Stack, Text } from "grommet";

import styles from "./PageHeader.module.css";

export const PageHeader = () => {
  const { cart, dispatch } = useAppState("order", "cart");
  const itemsCount = getSelectedItems(cart).length;

  const handle = React.useMemo(
    () => ({
      open: () => dispatch("order/openCart"),
    }),
    [dispatch]
  );

  return (
    <>
      <header className={styles.PageHeader}>
        <Stack anchor="right" className={styles.PageHeader__content}>
          <Logo />
          <Cart className={styles.PageHeader__cart} onClick={handle.open} />

          {itemsCount > 0 && (
            <Box
              background="accent-1"
              round
              className={styles.PageHeader__label}
            >
              <Text size="11px">{itemsCount}</Text>
            </Box>
          )}
        </Stack>
      </header>
      <div className={styles.PageHeader__compensator} />
    </>
  );
};
