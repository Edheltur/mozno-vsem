import React from "react";
import Head from "next/head";

import { AboutCompany } from "components/AboutCompany";
import { AboutIrinaRyl } from "components/AboutIrinaRyl";
import { Features } from "components/Features";
import { useAppState } from "store/index";

export const AboutPage = () => {
  const { config } = useAppState("config");
  return (
    <>
      <Head>
        <title>О нас</title>
        <meta
          property="og:image"
          content={config.publicUrl + "/images/about/irina-ryl.jpg"}
        />
      </Head>
      <AboutIrinaRyl />
      <AboutCompany />
      <Features />
    </>
  );
};
