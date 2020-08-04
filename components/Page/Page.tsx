import React from "react";
import Head from "next/head";
import styles from "./Page.module.css";
import { Favicons } from "components/Favicons";
import { PageHeader } from "components/PageHeader";
import { OrderSuccessModal } from "components/OrderSuccessModal";

export const Page: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Можно всем</title>
      <meta
        name="description"
        content="Полуфабрикаты «МОЖНО ВСЕМ!» - Магазин здорового питания"
      />
      <Favicons />
    </Head>
    <PageHeader />
    <main className={styles.Page__main}>{children}</main>
    <OrderSuccessModal />
  </>
);
