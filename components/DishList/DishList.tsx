import React from "react";
import { Heading, Tab, Tabs } from "grommet";

import { categories } from "common/data/categories";
import { DishCard } from "components/DishCard";

import styles from "./DishList.module.css";
import { getItemCountInCart } from "common/data/cart";
import { useAppState } from "store";

const List = React.memo(function List() {
  const { cart } = useAppState("cart");
  return (
    <>
      <Tabs className={styles.DishList__tabs}>
        {categories.map(({ title, items, slug }) => (
          <Tab title={title} key={slug}>
            <div className={styles.DishList__list}>
              {items.map((item) => (
                <DishCard
                  countInCart={getItemCountInCart(cart, item.id)}
                  item={item}
                  key={item.id}
                  mix={styles.DishList__listItem}
                />
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  );
});

export const DishList = () => {
  return (
    <div className={styles.DishList}>
      <Heading level="2" textAlign="center" margin={{ bottom: "xsmall" }}>
        Меню
      </Heading>
      <List />
    </div>
  );
};
