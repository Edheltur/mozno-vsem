import React from "react";
import { AppProps } from "next/app";
import { AppStateContext, store } from "store";

import "styles/fonts.css";
import "styles/globals.css";
import "styles/semantic.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppStateContext.Provider value={store}>
    <Component {...pageProps} />
  </AppStateContext.Provider>
);

export default MyApp;
