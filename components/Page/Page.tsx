import React from "react";
import Head from "next/head";
import { Main } from "grommet";

import { Favicons } from "components/Favicons";
import { PageHeader } from "components/PageHeader";
import { OrderSuccessModal } from "components/OrderSuccessModal";
import { CartModal } from "components/CartModal";
import { PageMenu } from "components/PageMenu";

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Можно всем – доставка полезных полуфабрикатов</title>
        <meta
          name="description"
          content="Полуфабрикаты «МОЖНО ВСЕМ!» – Магазин здорового питания"
        />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <Favicons />
      </Head>
      <PageHeader />
      <PageMenu />
      <Main pad={{ bottom: "large" }} align="center">
        {children}
      </Main>
      <CartModal />
      <OrderSuccessModal />
    </>
  );
};
