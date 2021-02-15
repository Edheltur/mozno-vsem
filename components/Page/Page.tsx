import React from "react";
import Head from "next/head";
import { Main } from "grommet";

import { PageHeader } from "components/PageHeader";
import { OrderSuccessModal } from "components/OrderSuccessModal";
import { CartModal } from "components/CartModal";
import { PageMenu } from "components/PageMenu";
import { CheckoutModal } from "components/CheckoutModal";

export interface ICommonPageProps {
  disableHeader?: boolean;
  disableMenu?: boolean;
  noIndex?: boolean;
}

export const Page: React.FC<ICommonPageProps> = ({
  children,
  disableHeader,
  disableMenu,
  noIndex,
}) => {
  return (
    <>
      <Head>
        <title>Можно всем – Доставка полезных полуфабрикатов</title>
        <meta
          name="description"
          content="Полуфабрикаты «МОЖНО ВСЕМ!» – Магазин здорового питания"
        />
        {noIndex && <meta name="robots" content="noindex" />}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d9b07b" />
        <meta name="msapplication-TileColor" content="#d9b07b" />
        <meta name="theme-color" content="#d9b07b" />
      </Head>
      {!disableHeader && <PageHeader />}
      {!disableMenu && <PageMenu />}
      <Main pad={{ bottom: "large" }} align="center">
        {children}
      </Main>
      <CartModal />
      <CheckoutModal />
      <OrderSuccessModal />
    </>
  );
};
