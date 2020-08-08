import React from "react";
import cn from "classnames";

import { Button } from "grommet";
import { useAppState } from "store";
import { TMenuItem } from "common/data/menu";

import styles from "./Dish.module.css";

interface IProps {
  item: TMenuItem;
  mix?: string;
}

export const Dish = ({ mix, item }: IProps) => {
  const { title, weight, price, id, previewImage } = item;
  const image = `/images/dishes/preview/${previewImage}`;
  const { dispatch } = useAppState("cart");

  const handle = React.useMemo(
    () => ({
      click: () => dispatch("cart/add", { id }),
    }),
    [dispatch, id]
  );

  return (
    <div className={cn(styles.Dish, mix)} onClick={handle.click}>
      <img className={styles.Dish__image} src={image} alt="" />
      <div className={styles.Dish__title}>{title}</div>
      <div className={styles.Dish__weight}>{weight}&nbsp;г</div>
      <Button className={styles.Dish__price} size="small">
        {price}&nbsp;₽
      </Button>
    </div>
  );
};
