import React from "react";
import styles from "./DishList.module.css";
import * as menu from "common/data/menu";
import { Dish } from "components/Dish";
import { Header } from "components/ui/Header";
import cn from "classnames";

interface IProps {
  mix?: string;
}

export const DishList = ({ mix }: IProps) => {
  return (
    <section className={cn(styles.DishList, mix)}>
      <Header level={2}>{menu.title}</Header>
      <div className={styles.DishList__list}>
        {menu.items.map((item) => (
          <Dish item={item} mix={styles.DishList__item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
