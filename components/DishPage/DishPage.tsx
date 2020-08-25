import React from "react";
import Error from "next/error";
import Head from "next/head";

import { DishInfo } from "components/DishInfo";
import { itemsBydId, TMenuItemId } from "common/data/menu";

interface IProps {
  id?: TMenuItemId;
}

export const DishPage = ({ id }: IProps) => {
  if (!id) {
    return <Error statusCode={404} />;
  }

  const item = itemsBydId[id];

  return (
    <>
      <Head>
        <title>{item.title} – заказать c доставкой</title>
      </Head>
      <DishInfo item={item} />
    </>
  );
};
