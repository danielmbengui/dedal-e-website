// Next JS related
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button, Card } from '@nextui-org/react';
//import { useSession, signIn, signOut } from "next-auth/react"
//import firebase from 'firebase/compat/app';
//import firebaseui from 'firebaseui';
//import 'firebaseui/dist/firebaseui.css';
import { getAuth, onAuthStateChanged, linkWithCredential, linkWithPopup, fetchSignInMethodsForEmail, signOut, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider , unlink, linkWithRedirect, reauthenticateWithRedirect, reauthenticateWithPopup, getRedirectResult, signInWithRedirect } from "firebase/auth";
import MenuComponent from "@/components/menu/MenuComponent";
import { FooterComponent } from "@/components/footer/FooterComponent";
import * as _Builtin from "@/devlink/_Builtin";
import * as _interactions from "@/devlink/interactions";
import { AccountPage, LoginPage } from '@/devlink';

export default function Login() {
    const twitterProvider = new TwitterAuthProvider();
    //const googleProvider = new GoogleAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [player, setPlayer] = useState(null);
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
                console.log('playerJSON ORIGINAL', user);
            }).catch(async (error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //const credential = TwitterAuthProvider.credentialFromError(error);
                //console.log('ERROR', errorCode, errorMessage);
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
            setPlayer(null);
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
                console.log('playerJSON ORIGINAL', user);
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
            setPlayer(null);
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
            setPlayer(user);
        } else {
            console.log('user twitter', 'not connected');
            console.log('user google', 'not connected');
            //setPlayer(null);
        }
    });
    useEffect(() => {
        
    }, []);

    return (
        <AccountPage />
        /*
        <>
        <MenuComponent />
        <_Builtin.Block className="main-wrapper" tag="div">
        <_Builtin.Block className="section-header" tag="div">
          <_Builtin.Block className="header-content-left" tag="div">
          {
            player !== null ? <Button onPress={signOutTwitter}>Logout Twitter</Button> : <Button onPress={signInTwitter}>Login Twitter</Button>
        }
        {
            player !== null ? <Button onPress={signOutGoogle}>Logout Google</Button> : <Button onPress={signInGoogle}>Login Google</Button>
        }
          </_Builtin.Block>
          </_Builtin.Block>
          </_Builtin.Block>
        <FooterComponent />
        </>
        <>
            <Head>
                <title>CodeBlog | LogIn</title>
            </Head>
            <div>
                <Card>
                    {

                        session ? <>
                            Signed in as {session.user.email} <br />
                            <button onClick={() => signOut('google')}>Sign out Google</button>
                        </>
                            : <>
                                Not signed in <br />
                                <button onClick={() => signIn('google')}>Sign in Google</button>
                            </>
                    }
                </Card>
            </div>
            <div>
                <Card>
                    {

                        session ? <>
                            Signed in as {session.user.email} <br />
                            <button onClick={() => signOut('facebook')}>Sign out Facebook</button>
                        </>
                            : <>
                                Not signed in <br />
                                <button onClick={() => signIn('facebook')}>Sign in Facebook</button>
                            </>
                    }
                </Card>
            </div>
            <div>
                <Card>
                    {

                        session ? <>
                            Signed in as {session.user.email} <br />
                            <button onClick={() => signOut('twitter')}>Sign out Twitter</button>
                        </>
                            : <>
                                Not signed in <br />
                                <button onClick={() => signIn('twitter')}>Sign in Twitter</button>
                            </>
                    }
                </Card>
            </div>
        </>
        */
    )
}