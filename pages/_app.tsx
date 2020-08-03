import React from "react";
import { AppProps } from "next/app";
import { store, AppStateContext } from "store";

import "styles/semantic.css";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppStateContext.Provider value={store}>
    <Component {...pageProps} />
  </AppStateContext.Provider>
);

export default MyApp;
