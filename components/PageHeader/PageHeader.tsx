import React from "react";
import { Sticky } from "semantic-ui-react";

import styles from "./PageHeader.module.css";
import { Logo } from "components/Logo";
import { CartModal } from "components/CartModal";
import { useAppState } from "store/index";
import { getTotalPrice } from "store/selectors/cart";
import { Icon } from "components/ui/Icon";

export const PageHeader = () => {
  const { cart } = useAppState("order", "cart");
  const totalPrice = getTotalPrice(cart);

  return (
    <Sticky>
      <header className={styles.PageHeader}>
        <Logo />
        <CartModal
          trigger={
            <span className={styles.PageHeader__cart}>
              {totalPrice > 0 && <span>{totalPrice}&nbsp;₽&nbsp;</span>}
              <Icon icon="shopping-cart" />
            </span>
          }
        />
      </header>
    </Sticky>
  );
};
