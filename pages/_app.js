import * as React from "react";
import "@/devlink/global.css";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"



import { DevLinkProvider } from "@/devlink";
//import { NextUIProvider } from "@nextui-org/system";
import { NextUIProvider } from "@nextui-org/system";
import { appWithTranslation } from 'next-i18next';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8PLiUF_jgNtt5fS-4Zc8GDMzbxcyapgw",
  authDomain: "dedal-e.firebaseapp.com",
  projectId: "dedal-e",
  storageBucket: "dedal-e.appspot.com",
  messagingSenderId: "327877352541",
  appId: "1:327877352541:web:cd489a9153539f3eaac1b4",
  measurementId: "G-SW9TYFNRN9"
};

const app = initializeApp(firebaseConfig);

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <DevLinkProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </DevLinkProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(App);