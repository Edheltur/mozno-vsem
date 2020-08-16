import React from "react";
import Error from "next/error";

import { DishInfo } from "components/DishInfo";
import { itemsBydId, TMenuItemId } from "common/data/menu";

interface IProps {
  id?: TMenuItemId;
}

export const DishPage = ({ id }: IProps) => {
  if (!id) {
    return <Error statusCode={404} />;
  }
  return <DishInfo item={itemsBydId[id]} />;
};
