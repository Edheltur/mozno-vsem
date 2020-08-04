import React from "react";
import styles from "./Dish.module.css";
import { Button } from "semantic-ui-react";
import { useAppState } from "store/index";
import cn from "classnames";
import { IMenuItem } from "data/menu";

interface IProps extends IMenuItem {
  mix?: string;
}

export const Dish = React.memo(({ title, weight, price, mix, id }: IProps) => {
  const image = `/images/dishes/preview/${id}.jpeg`;
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
      <Button className={styles.Dish__price} size="mini">
        {price}&nbsp;₽
      </Button>
    </div>
  );
});
