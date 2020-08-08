import React from "react";
import Error from "next/error";

import { Page } from "components/Page";
import { DishInfo } from "components/DishInfo";
import { itemsBydId, TMenuItemId } from "common/data/menu";

interface IProps {
  id?: TMenuItemId;
}

export const DishPage = ({ id }: IProps) => {
  if (!id) {
    return <Error statusCode={404} />;
  }
  return (
    <Page>
      <DishInfo item={itemsBydId[id]} />
    </Page>
  );
};
