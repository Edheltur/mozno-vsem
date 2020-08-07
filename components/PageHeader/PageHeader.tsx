import React from "react";

import styles from "./PageHeader.module.css";
import { Logo } from "components/Logo";
import { CartModal } from "components/CartModal";
import { useAppState } from "store/index";
import { getTotalPrice } from "common/data/cart";
import { Icon } from "components/ui/Icon";

export const PageHeader = () => {
  const { cart } = useAppState("order", "cart");
  const totalPrice = getTotalPrice(cart);

  return (
    <>
      <header className={styles.PageHeader}>
        <div className={styles.PageHeader__content}>
          <Logo />
          <CartModal
            trigger={
              <span className={styles.PageHeader__cart}>
                {totalPrice > 0 && <span>{totalPrice}&nbsp;₽&nbsp;</span>}
                <Icon
                  icon="shopping-cart"
                  className={styles.PageHeader__cartIcon}
                />
              </span>
            }
          />
        </div>
      </header>
      <div className={styles.PageHeader__compensator} />
    </>
  );
};
