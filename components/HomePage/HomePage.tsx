import React from "react";
import Head from "next/head";

import { DishList } from "components/DishList";
import { DeliveryInfo } from "components/DeliveryInfo";
import { useRouter } from "next/router";
import { categories } from "common/data/categories";

export const HomePage = () => {
  const router = useRouter();
  const { category: categorySlug } = router.query;

  const category = categories.find((x) => x.slug === categorySlug);
  return (
    <>
      {category && (
        <Head>
          <title>Можно всем – {category.title}</title>
        </Head>
      )}
      <DeliveryInfo />
      <DishList />
    </>
  );
};
