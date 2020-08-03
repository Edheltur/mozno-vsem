import React from "react";
import styles from "./PageHeader.module.css";
import { Logo } from "components/Logo";
import { Icon, Sticky, Label } from "semantic-ui-react";
import { CartModal } from "components/CartModal";
import { useAppState } from "store/index";
import { getTotalPrice } from "store/selectors/cart";

export const PageHeader = () => {
  const { cart } = useAppState("order", "cart");
  const totalPrice = getTotalPrice(cart);

  return (
    <Sticky>
      <header className={styles.PageHeader}>
        <Logo />
        <CartModal
          trigger={
            <Icon
              name="cart"
              size="large"
              color="grey"
              className={styles.PageHeader__cartIcon}
            >
              {totalPrice > 0 && (
                <span className={styles.PageHeader__cartIconLabel}>
                  {totalPrice}&nbsp;₽
                </span>
              )}
            </Icon>
          }
        />
      </header>
    </Sticky>
  );
};
