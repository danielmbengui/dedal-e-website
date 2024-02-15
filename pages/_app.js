import React, { useState, useEffect } from "react";
import "@/devlink/global.css";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"



import { DevLinkProvider } from "@/devlink";
//import { NextUIProvider } from "@nextui-org/system";
import { NextUIProvider } from "@nextui-org/system";
import { appWithTranslation } from 'next-i18next';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, linkWithCredential, linkWithPopup, fetchSignInMethodsForEmail, signOut, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider, unlink, linkWithRedirect, reauthenticateWithRedirect, reauthenticateWithPopup, getRedirectResult, signInWithRedirect } from "firebase/auth";

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
  const [connectedUser, setConnectedUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    let uid = '';
    let name = '';
    let photo = '';
    if (user) {
      uid = user.uid;
      name = user.displayName;
      photo = user.photoURL;
      const myUser = {
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      }
      console.log('exist onAuthStateChanged User', user.displayName);
      setConnectedUser(myUser);
    } else {
      console.log('user twitter', 'not connected');
      console.log('user google', 'not connected');
      setConnectedUser(null);
    }
  });
  return (
    <SessionProvider session={session}>
      <DevLinkProvider>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <Component {...pageProps} connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
          </main>
        </NextUIProvider>
      </DevLinkProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(App);