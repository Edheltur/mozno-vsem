import React from "react";
import Error from "next/error";
import Head from "next/head";

import { DishInfo } from "components/DishInfo";
import { itemsBydId, TMenuItemId } from "common/data/menu";
import { useAppState } from "store/index";

interface IProps {
  id?: TMenuItemId;
}

export const DishPage = ({ id }: IProps) => {
  const { config } = useAppState("config");

  if (!id) {
    return <Error statusCode={404} />;
  }

  const item = itemsBydId[id];

  return (
    <>
      <Head>
        <title>{item.title} – заказать c доставкой</title>
        <meta
          property="og:image"
          content={`${config.publicUrl}/images/dishes/preview/${item.image}`}
        />
      </Head>
      <DishInfo item={item} />
    </>
  );
};
