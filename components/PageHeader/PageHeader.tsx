import React from "react";

import { useAppState } from "store";
import { Logo } from "components/Logo";
import { Icon } from "components/ui/Icon";
import { getTotalPrice } from "common/data/cart";

import styles from "./PageHeader.module.css";

export const PageHeader = () => {
  const { cart, dispatch } = useAppState("order", "cart");
  const totalPrice = getTotalPrice(cart);

  const handle = React.useMemo(
    () => ({
      open: () => dispatch("order/openCart"),
    }),
    [dispatch]
  );

  return (
    <>
      <header className={styles.PageHeader}>
        <div className={styles.PageHeader__content}>
          <Logo />
          <span className={styles.PageHeader__cart} onClick={handle.open}>
            {totalPrice > 0 && <span>{totalPrice}&nbsp;₽&nbsp;</span>}
            <Icon
              icon="shopping-cart"
              className={styles.PageHeader__cartIcon}
            />
          </span>
        </div>
      </header>
      <div className={styles.PageHeader__compensator} />
    </>
  );
};
