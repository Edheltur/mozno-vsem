import React from "react";

import { DishList } from "components/DishList";
import { DeliveryInfo } from "components/DeliveryInfo";
import { Contacts } from "components/Contacts";

export const HomePage = () => (
  <>
    <Contacts />
    <DeliveryInfo />
    <DishList />
  </>
);
