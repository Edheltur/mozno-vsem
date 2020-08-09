import React from "react";
import Head from "next/head";
import { Main } from "grommet";

import { Favicons } from "components/Favicons";
import { PageHeader } from "components/PageHeader";
import { OrderSuccessModal } from "components/OrderSuccessModal";
import { CartModal } from "components/CartModal";
import { useAppState } from "store";

export const Page: React.FC = ({ children }) => {
  const { config } = useAppState("config");
  return (
    <>
      <Head>
        <title>Можно всем</title>
        {config.noindex && <meta name="robots" content="noindex" />}
        <meta
          name="description"
          content="Полуфабрикаты «МОЖНО ВСЕМ!» - Магазин здорового питания"
        />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <Favicons />
      </Head>
      <PageHeader />
      <Main pad="small" align="center">
        {children}
      </Main>
      <CartModal />
      <OrderSuccessModal />
    </>
  );
};
