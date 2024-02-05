import * as React from "react";
import "@/styles/globals.css";
//import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";
import { NextUIProvider } from "@nextui-org/react";
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => {
  return (
  <NextUIProvider>
    <DevLinkProvider>
    <Component {...pageProps} />
        </DevLinkProvider>
  </NextUIProvider>);
}

export default appWithTranslation(App);