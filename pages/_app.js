import * as React from "react";
import "@/styles/globals.css";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";
//import { NextUIProvider } from "@nextui-org/system";
import {NextUIProvider} from "@nextui-org/system";
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => {
  return (
  
    <DevLinkProvider>
      <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
    
        </DevLinkProvider>
  )
}

export default appWithTranslation(App);