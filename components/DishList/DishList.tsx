import React from "react";
import cn from "classnames";
import { Heading } from "grommet";

import * as menu from "common/data/menu";
import { Dish } from "components/Dish";

import styles from "./DishList.module.css";

interface IProps {
  mix?: string;
}

export const DishList = ({ mix }: IProps) => {
  return (
    <section className={cn(styles.DishList, mix)}>
      <Heading level="2" textAlign="center">
        {menu.title}
      </Heading>
      <div className={styles.DishList__list}>
        {menu.items.map((item) => (
          <Dish item={item} mix={styles.DishList__item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
