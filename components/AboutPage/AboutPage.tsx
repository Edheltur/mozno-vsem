import React from "react";
import Head from "next/head";

import { AboutCompany } from "components/AboutCompany";
import { AboutIrinaRyl } from "components/AboutIrinaRyl";
import { Features } from "components/Features";

export const AboutPage = () => (
  <>
    <Head>
      <title>О нас</title>
    </Head>
    <AboutIrinaRyl />
    <AboutCompany />
    <Features />
  </>
);
