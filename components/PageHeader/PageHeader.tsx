import React from "react";
import Link from "next/link";

import { useAppState } from "store";
import { Logo } from "components/Logo";
import { getSelectedItems } from "common/data/cart";
import { Cart } from "grommet-icons";
import { Box, Stack, Text } from "grommet";

import styles from "./PageHeader.module.css";
import { useIsMounted } from "client/helpers/hooks";

const LogoLink = React.memo(function LogoLink() {
  return (
    <Link passHref href="/">
      <a title="Главная">
        <Logo />
      </a>
    </Link>
  );
});

const CartLabel = React.memo(function CartLabel({ value }: { value: number }) {
  return (
    <Box
      background="accent-1"
      round
      className={styles.PageHeader__label}
      animation={{ type: "fadeIn", duration: 250 }}
    >
      <Text size="11px">{value}</Text>
    </Box>
  );
});

const MemoizedStack = React.memo(Stack);

const HeaderContent = React.memo(function HeaderContent({
  mix,
}: {
  mix?: string;
}) {
  const { cart, dispatch } = useAppState("order", "cart");
  const itemsCount = getSelectedItems(cart).length;
  const isMounted = useIsMounted();

  const handle = React.useMemo(
    () => ({
      open: () => dispatch("order/openCart"),
    }),
    [dispatch]
  );
  return (
    <MemoizedStack anchor="right" className={mix}>
      <LogoLink />
      <Cart className={styles.PageHeader__cart} onClick={handle.open} />
      {itemsCount > 0 && isMounted && <CartLabel value={itemsCount} />}
    </MemoizedStack>
  );
});

export const PageHeader = React.memo(function PageHeader() {
  return (
    <>
      <header className={styles.PageHeader}>
        <HeaderContent mix={styles.PageHeader__content} />
      </header>
      <div className={styles.PageHeader__compensator} />
    </>
  );
});
