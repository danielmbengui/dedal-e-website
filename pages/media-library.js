import * as React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import {Button} from "@nextui-org/button";
import { AboutPage, GalleryPage, HomePage, MediaPage } from "@/devlink";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
//import { useTranslation } from 'react-i18next';
import { TAB_LANGUAGES, TAB_NAMESPACES } from "@/constants/languages";
import Head from "next/head";
import { BuyComponent } from "@/components/buy/BuyComponent";
import { MediaComponent } from "@/components/media/MediaComponent";


const inter = Inter({ subsets: ["latin"] });

export default function MediaLibrary({connectedUser, setConnectedUser}) {
  const { t } = useTranslation();

  return (
    <>
    <Head>
      <meta name="description" content={`${t('slogan_website', { ns: 'common' })}`} />
      <title>{`Dedal-E | ${t('media-library', { ns: 'navbar' })}`}</title>
    </Head>
    <MediaComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
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
