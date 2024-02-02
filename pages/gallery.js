import * as React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import {Button} from "@nextui-org/button";
import { AboutPage, GalleryPage, HomePage } from "@/devlink";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
//import { useTranslation } from 'react-i18next';
import { TAB_LANGUAGES, TAB_NAMESPACES } from "@/constants";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <>
    <Head>
      <meta name="description" content="Your art authentication platform based on blockchain technology." />
      <title>{`Dedal-E | ${t('menu.home', { ns: 'common' })}`}</title>
    </Head>
    <GalleryPage />
    </>
  );
}

//export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, TAB_NAMESPACES, null, TAB_LANGUAGES)),
      //...(await serverSideTranslations(locale, TAB_NAMEPACES, null, TAB_LANGAGES)),
      // Will be passed to the page component as props
    },
  }
}
