import React from "react";

import { DishList } from "components/DishList";
import { DeliveryInfo } from "components/DeliveryInfo";

export const HomePage = () => (
  <>
    <DeliveryInfo />
    <DishList />
  </>
);
