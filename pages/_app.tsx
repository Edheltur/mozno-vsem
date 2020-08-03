import React from "react";
import { AppProps } from "next/app";

import "styles/semantic.css";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default MyApp;
