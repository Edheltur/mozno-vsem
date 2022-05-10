import React from "react";
import Head from "next/head";

import { AboutIrinaRyl } from "components/AboutIrinaRyl";
import { config } from "common/config";

export const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Обо мне</title>
        <meta
          property="og:image"
          content={config.publicUrl + "/images/about/irina-ryl.jpg"}
        />
      </Head>
      <AboutIrinaRyl />
    </>
  );
};
