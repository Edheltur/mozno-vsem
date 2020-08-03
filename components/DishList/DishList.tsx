import React from "react";
import styles from "./DishList.module.css";
import menu from "data/menu";
import { Dish } from "components/Dish";
import { Header } from "semantic-ui-react";

interface IProps {
  mix?: string;
}

export const DishList = ({ mix }: IProps) => (
  <section className={`${styles.DishList} ${mix}`}>
    <Header as="h2" textAlign="center">
      {menu.title}
    </Header>
    <div className={styles.DishList__list}>
      {menu.items.map(({ id, ...props }) => (
        <Dish
          {...props}
          mix={styles.DishList__item}
          key={id}
          image={`/images/dishes/preview/${id}.jpeg`}
        />
      ))}
    </div>
  </section>
);
