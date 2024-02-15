import * as React from "react";
import { Inter } from "next/font/google";
import { ContactPage } from "@/devlink";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
//import { useTranslation } from 'react-i18next';
import { TAB_LANGUAGES, TAB_NAMESPACES } from "@/constants/languages";
import Head from "next/head";
import { ContactComponent } from "@/components/contact/ContactComponent";


const inter = Inter({ subsets: ["latin"] });

export default function Contact({connectedUser, setConnectedUser}) {
  const { t } = useTranslation();

  return (
    <>
    <Head>
      <meta name="description" content={`${t('slogan_website', { ns: 'common' })}`} />
      <title>{`Dedal-E | ${t('resources.contact', { ns: 'footer' })}`}</title>
    </Head>
    <ContactComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
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
