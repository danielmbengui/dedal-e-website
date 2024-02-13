// Next JS related
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button, Card } from '@nextui-org/react';
//import { useSession, signIn, signOut } from "next-auth/react"
//import firebase from 'firebase/compat/app';
//import firebaseui from 'firebaseui';
//import 'firebaseui/dist/firebaseui.css';
import { getAuth, onAuthStateChanged, linkWithPopup, fetchSignInMethodsForEmail, signOut, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider , unlink, linkWithRedirect, reauthenticateWithRedirect, reauthenticateWithPopup, getRedirectResult, signInWithRedirect } from "firebase/auth";



export default function Login() {
    const twitterProvider = new TwitterAuthProvider();
    //const googleProvider = new GoogleAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [player, setPlayer] = useState(null);
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
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //const credential = TwitterAuthProvider.credentialFromError(error);
                //console.log('ERROR', errorCode, errorMessage);
                if (error.code === 'auth/account-exists-with-different-credential') {
                    var email = error.email;
                    // Obtenir les méthodes de connexion pour cet e-mail.
                    fetchSignInMethodsForEmail(email).then((methods) => {
                        // Informer l'utilisateur que l'email est déjà utilisé avec une autre méthode.
                        // Ici, vous pouvez guider l'utilisateur sur comment se connecter avec l'autre méthode,
                        // ou lui permettre de fusionner les comptes.
                        console.log("methods : ", methods);
                    });
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
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //const credential = GoogleAuthProvider.credentialFromError(error);
                //console.log('ERROR', errorCode, errorMessage);
                if (error.code === 'auth/account-exists-with-different-credential') {
                    var email = error.email;
                    // Obtenir les méthodes de connexion pour cet e-mail.
                    fetchSignInMethodsForEmail(email).then((methods) => {
                        // Informer l'utilisateur que l'email est déjà utilisé avec une autre méthode.
                        // Ici, vous pouvez guider l'utilisateur sur comment se connecter avec l'autre méthode,
                        // ou lui permettre de fusionner les comptes.
                        console.log("methods : ", methods);
                    });
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
        <>
        {
            player !== null ? <Button onPress={signOutTwitter}>Logout Twitter</Button> : <Button onPress={signInTwitter}>Login Twitter</Button>
        }
        {
            player !== null ? <Button onPress={signOutGoogle}>Logout Google</Button> : <Button onPress={signInGoogle}>Login Google</Button>
        }
        </>
        /*
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