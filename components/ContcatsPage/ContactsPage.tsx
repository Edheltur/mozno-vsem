import React from "react";

import { Contacts } from "components/Contacts";
import Head from "next/head";

export const ContactsPage = () => (
  <>
    <Head>
      <title>Контакты</title>
    </Head>
    <Contacts />
  </>
);
