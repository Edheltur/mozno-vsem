import React from "react";
import Head from "next/head";
import styles from "./Page.module.css";
import { Favicons } from "components/Favicons";
import { PageHeader } from "components/PageHeader";

export const Page: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Можно всем</title>
      <Favicons />
    </Head>
    <PageHeader />
    <main className={styles.Page__main}>{children}</main>
  </>
);
