import React from "react";
import cn from "classnames";
import { Heading } from "grommet";

import * as menu from "common/data/menu";
import { DishCard } from "components/DishCard";

import styles from "./DishList.module.css";
import { getItemCountInCart } from "common/data/cart";
import { useAppState } from "store";

interface IProps {
  mix?: string;
}

const List = React.memo(function List() {
  const { cart } = useAppState("cart");
  return (
    <>
      {menu.items.map((item) => (
        <DishCard
          countInCart={getItemCountInCart(cart, item.id)}
          item={item}
          key={item.id}
          mix={styles.DishList__listItem}
        />
      ))}
    </>
  );
});

export const DishList = ({ mix }: IProps) => {
  return (
    <div className={cn(styles.DishList, mix)}>
      <Heading level="2" textAlign="center">
        {menu.title}
      </Heading>
      <div className={styles.DishList__list}>
        <List />
      </div>
    </div>
  );
};
