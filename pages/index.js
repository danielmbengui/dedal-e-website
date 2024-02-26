import React, {useEffect} from "react";
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
import axios from 'axios';
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home({connectedUser, setConnectedUser}) {
  const { t } = useTranslation();
  const name = "Daniel Mbengui"
  const email = "daniel.mbengui@gmail.com"
  const comment = "My comment test"

  fetch('/api/submitcomment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: "Daniel Mbengui",
      email: "daniel.mbengui@gmail.com",
      comment: "My comment test",
    }),
    mode: 'no-cors', // Ajout de l'option no-cors ici
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

  

  

  return (
    <>
    <Head>
      <meta name="description" content={`${t('slogan_website', { ns: 'common' })}`} />
      <title>{`Dedal-E | ${t('home', { ns: 'navbar' })}`}</title>
    </Head>

    
    <HomeComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />


    <Button onClick={async () => {
      try {
        const response = await axios.post('https://api.metahumansdk.io/auth/', `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&comment=${encodeURIComponent(comment)}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            mode:'Access-Control-Allow-Origin'
          },
        });
    
        console.log('Réponse reçue:', response.data);
      } catch (error) {
        console.error('Erreur lors de la requête:', error.response);
      }
    }}>On click</Button>
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
