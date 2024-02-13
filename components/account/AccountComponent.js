import React, {useEffect, useState} from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { Navbar } from "@/devlink/Navbar";
import { HeroBanner } from "@/devlink/HeroBanner";
import { Footer } from "@/devlink/Footer";
import MenuComponent from "../menu/MenuComponent";
import { FooterComponent } from "../footer/FooterComponent";
import { Stack } from "@mui/material";
import { GoogleIcon } from "../icons/GoogleIcon";
import { getAuth, onAuthStateChanged, linkWithCredential, linkWithPopup, fetchSignInMethodsForEmail, signOut, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider , unlink, linkWithRedirect, reauthenticateWithRedirect, reauthenticateWithPopup, getRedirectResult, signInWithRedirect } from "firebase/auth";

import {Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {ChevronDownIcon} from '@/components/icons/ChevronDownIcon';
import { useRouter } from 'next/router';


export function AccountComponent({ as: _Component = _Builtin.Block }) {
    const router = useRouter();
    const { section } = router.query;
    const twitterProvider = new TwitterAuthProvider();
    //const googleProvider = new GoogleAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [connectedUser, setConnectedUser] = useState(null);
    const [pendingCred, setPendingCred] = useState(null);
    //console.log('twitterProvider', twitterProvider)
    const auth = getAuth();
    //const { data: session } = useSession();
    const signInTwitter = () => {
        signInWithPopup(auth, twitterProvider)
            .then(async (result) => {
                const credential = TwitterAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                //const secret = credential.secret;
                const user = result.user;
                //const uid = user.uid;
                //const displayName = user.displayName;
                //const photoURL = user.photoURL;               
                console.log('connectedUserJSON ORIGINAL', user);
            }).catch(async (error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //const credential = TwitterAuthProvider.credentialFromError(error);
                if (error.code === 'auth/account-exists-with-different-credential') {
                    //setPendingCred(error.credential);
                    let result = await signInWithPopup(getAuth(), googleProvider);
                    // Step 6: Link to the Twitter credential.
                    // TODO: implement `retrievePendingCred` for your app.
                    let pendingCred = error.credential;

                    if (pendingCred !== null) {
                        // As you have access to the pending credential, you can directly call the
                        // link method.
                        let user = await linkWithCredential(result.user, pendingCred);
                    }
                }
                // ...
            });
    }

    const signOutTwitter = () => {
        signOut(auth).then(() => {
            console.log('state', 'ooooooooook disconnected TWITTER');
            setConnectedUser(null);
        }).catch((error) => {
            // An error happened.
            console.log('state', 'error', error)
        });
    }

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                //const secret = credential.secret;
                //const user = result.user;
                //const uid = user.uid;
                //const displayName = user.displayName;
                //const photoURL = user.photoURL;               
                console.log('connectedUserJSON ORIGINAL', user);
            }).catch(async (error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //const credential = TwitterAuthProvider.credentialFromError(error);
                //console.log('ERROR', errorCode, errorMessage);
                if (error.code === 'auth/account-exists-with-different-credential') {
                    //setPendingCred(error.credential);
                    let result = await signInWithPopup(getAuth(), twitterProvider);

                    // Step 6: Link to the Twitter credential.
                    // TODO: implement `retrievePendingCred` for your app.
                    let pendingCred = error.credential;

                    if (pendingCred !== null) {
                        // As you have access to the pending credential, you can directly call the
                        // link method.
                        let user = await linkWithCredential(result.user, pendingCred);
                    }
                }
                // ...
            });
    }
    const signOutGoogle = () => {
        signOut(auth).then(() => {
            console.log('state', 'ooooooooook disconnected GOOGLE');
            setConnectedUser(null);
        }).catch((error) => {
            // An error happened.
            console.log('state', 'error', error)
        });
    }
    const signOutAccount = () => {
        signOut(auth).then(() => {
            console.log('state', 'ooooooooook disconnected GOOGLE');
            setConnectedUser(null);
        }).catch((error) => {
            // An error happened.
            console.log('state', 'error', error)
        });
    }
    onAuthStateChanged(auth, async (user) => {
        let uid = '';
        let name = '';
        let photo = '';
        if (user) {
            uid = user.uid;
            name = user.displayName;
            photo = user.photoURL;
            console.log('exist onAuthStateChanged User', user.displayName);
            setConnectedUser(user);
        } else {
            console.log('user twitter', 'not connected');
            console.log('user google', 'not connected');
            //setConnectedUser(null);
        }
    });
  return (
    <_Component className="main-wrapper" tag="div">
      <MenuComponent />
      <HeroBanner heading2Text="Account" textSizeRegluarText="Creation" />
      <_Builtin.Block className="section-change-log" tag="div">
        <_Builtin.Block className="padding-global" tag="div">
          <_Builtin.Block className="container-large" tag="div">
            <_Builtin.Block className="padding-section-large" tag="div" />
            {
                !connectedUser && <Stack>
                <Button color="danger" startContent={<GoogleIcon />} onPress={signInGoogle}>
                    Sign In with google
                </Button>
                {section}
                </Stack>
            }
            {
                connectedUser && <Stack justifyContent={'center'} alignItems={'center'}>
                    <Button color="danger" onPress={signOutAccount}>
                    Logout
                </Button>
                {section}
                </Stack>
            }
            
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <FooterComponent />
    </_Component>
  );
}
