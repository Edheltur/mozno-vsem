import React from "react";

import { Page } from "components/Page";
import { DishList } from "components/DishList";
import { DeliveryInfo } from "components/DeliveryInfo";

export const HomePage = () => (
  <Page>
    <DeliveryInfo />
    <DishList />
  </Page>
);
