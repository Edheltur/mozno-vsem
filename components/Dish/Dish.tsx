import React from "react";
import styles from "./Dish.module.css";
import { Button } from "semantic-ui-react";
import { useAppState } from "store/index";
import { TMenuItem } from "common/data/menu";
import cn from "classnames";

interface IProps {
  item: TMenuItem;
  mix?: string;
}

export const Dish = React.memo(({ mix, item }: IProps) => {
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
      <Button className={styles.Dish__price} size="mini">
        {price}&nbsp;₽
      </Button>
    </div>
  );
});
