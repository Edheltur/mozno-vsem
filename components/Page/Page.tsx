import React from "react";
import Head from "next/head";
import { Main } from "grommet";

import { Favicons } from "components/Favicons";
import { PageHeader } from "components/PageHeader";
import { OrderSuccessModal } from "components/OrderSuccessModal";
import { CartModal } from "components/CartModal";

export const Page: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Можно всем</title>
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
