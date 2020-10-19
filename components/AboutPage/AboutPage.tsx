import React from "react";
import Head from "next/head";

import { AboutCompany } from "components/AboutCompany";
import { AboutIrinaRyl } from "components/AboutIrinaRyl";
import { Features } from "components/Features";
import { config } from "common/config";

export const AboutPage = () => {
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
