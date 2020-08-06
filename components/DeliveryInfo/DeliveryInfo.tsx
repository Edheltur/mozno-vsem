import React from "react";
import styles from "./DeliveryInfo.module.css";
import { Header } from "components/ui/Header";
import delivery from "common/data/delivery";
import cn from "classnames";

interface IProps {
  mix?: string;
}
export const DeliveryInfo = ({ mix }: IProps) => (
  <section className={cn(styles.DeliveryInfo, mix)}>
    <Header mix={styles.DeliveryInfo__title} level={2}>
      {delivery.title}
    </Header>
    <p className={styles.DeliveryInfo__description}>{delivery.description}</p>
  </section>
);
