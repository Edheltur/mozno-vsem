import React from "react";
import styles from "./DeliveryInfo.module.css";
import { Header } from "semantic-ui-react";
import delivery from "data/delivery";
import cn from "classnames";

interface IProps {
  mix?: string;
}
export const DeliveryInfo = ({ mix }: IProps) => (
  <section className={cn(styles.DeliveryInfo, mix)}>
    <Header className={styles.DeliveryInfo__title} as="h2" textAlign="center">
      {delivery.title}
    </Header>
    <p className={styles.DeliveryInfo__description}>{delivery.description}</p>
  </section>
);
