import React from "react";
import { AppProps } from "next/app";
import { AppStateContext, store } from "store";
import { Grommet, ThemeType } from "grommet";

import "styles/globals.css";

const theme: ThemeType = {
  global: {
    font: {
      family: "Didact Gothic",
    },
    colors: {
      brand: "#D9B07B",
      "accent-1": "#703166",
      "accent-2": "#FFCF00",
      "accent-3": "#F47312",
      "neutral-1": "#5D7723",
      "neutral-2": "#A3550B",
      telegram: "#0088CC",
      whatsapp: "#25D366",
      focus: "accent-2",
    },
  },
  heading: {
    font: {
      family: "Tenor Sans",
    },
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppStateContext.Provider value={store}>
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  </AppStateContext.Provider>
);

export default MyApp;
