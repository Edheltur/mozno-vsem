import React from "react";
import { AppProps } from "next/app";
import { Grommet, ThemeType } from "grommet";

import { AppStateContext, store } from "store";
import { YandexMetrika } from "components/YandexMetrika";
import { Page } from "components/Page";

import "styles/globals.css";

const theme: ThemeType = {
  global: {
    font: {
      family: "Montserrat",
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
    breakpoints: {
      xxsmall: {
        value: 320,
      },
    },
  },
  anchor: {
    fontWeight: 500,
  },
  heading: {
    font: {
      family: "Tenor Sans",
    },
    weight: 400,
  },
};

const App = ({ Component, pageProps, router }: AppProps) => (
  <AppStateContext.Provider value={store}>
    <YandexMetrika url={router.asPath} />
    <Grommet theme={theme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Grommet>
  </AppStateContext.Provider>
);

export default App;
