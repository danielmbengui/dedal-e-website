import * as React from "react";
//import Image from "next/image";
import { Inter } from "next/font/google";
//import {Button} from "@nextui-org/button";
import { HomePage } from "@/devlink";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
//import { useTranslation } from 'react-i18next';
import { TAB_LANGUAGES, TAB_NAMESPACES } from "@/constants/languages";
import Head from "next/head";
import { HomeComponent } from "@/components/home/HomeComponent";
//import { HomeComponent } from "@/components/home/Home";
//import {Home} from "@/components/home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
    <Head>
      <meta name="description" content={`${t('slogan_website', { ns: 'common' })}`} />
      <title>{`Dedal-E | ${t('home', { ns: 'navbar' })}`}</title>
    </Head>
    
    <HomeComponent />
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
