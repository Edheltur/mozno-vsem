import React from "react";
import styles from "./Dish.module.css";
import { Button, Image } from "semantic-ui-react";

interface IProps {
  title: string;
  weight: number;
  price: number;
  image: string;
  mix?: string;
}

export const Dish = ({ title, weight, price, image, mix }: IProps) => (
  <div className={`${styles.Dish} ${mix}`}>
    <img className={styles.Dish__image} src={image} alt="" />
    <div className={styles.Dish__title}>{title}</div>
    <div className={styles.Dish__weight}>{weight}&nbsp;г</div>
    <Button className={styles.Dish__price} size="mini">
      {price}&nbsp;₽
    </Button>
  </div>
);
