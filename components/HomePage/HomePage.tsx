import React from "react";
import styles from "./HomePage.module.css";
import { Page } from "components/Page";
import { DishList } from "components/DishList";
import { DeliveryInfo } from "components/DeliveryInfo";

export const HomePage = () => (
  <Page>
    <DeliveryInfo />
    <DishList mix={styles.HomePage__section} />
  </Page>
);
