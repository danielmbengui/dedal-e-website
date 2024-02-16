import React, {useEffect, useState} from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { Navbar } from "@/devlink/Navbar";
import { HeroBanner } from "@/devlink/HeroBanner";
import { Footer } from "@/devlink/Footer";
import MenuComponent from "../menu/MenuComponent";
import { FooterComponent } from "../footer/FooterComponent";
import { Grid, Stack } from "@mui/material";
import { GoogleIcon } from "../icons/GoogleIcon";
import { getAuth, onAuthStateChanged, linkWithCredential, linkWithPopup, fetchSignInMethodsForEmail, signOut, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider , unlink, linkWithRedirect, reauthenticateWithRedirect, reauthenticateWithPopup, getRedirectResult, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';


export function AccountComponent({ as: _Component = _Builtin.Block, connectedUser, setConnectedUser }) {
    const router = useRouter();
    const { section } = router.query;
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    //const googleProvider = new GoogleAuthProvider();
    
    //const [connectedUser, setConnectedUser] = useState(null);
    const [pendingCred, setPendingCred] = useState(null);
    //console.log('twitterProvider', twitterProvider)
    const auth = getAuth();
    //const { data: session } = useSession();
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
                    let result = await signInWithPopup(auth, twitterProvider);

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
    const signInFacebook = () => {
        signInWithPopup(auth, facebookProvider)
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
                    let result = await signInWithPopup(auth, googleProvider);

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
                    let result = await signInWithPopup(auth, googleProvider);
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

    const signOutAccount = () => {
        signOut(auth).then(() => {
            console.log('state', 'ooooooooook disconnected GOOGLE');
            setConnectedUser(null);
        }).catch((error) => {
            // An error happened.
            console.log('state', 'error', error)
        });
    }
 
  return (
    <_Component className="page-wrapper" tag="div">
      <MenuComponent connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
      <_Builtin.Block className="main-wrapper" tag="div">
      <HeroBanner heading2Text="Account" textSizeRegluarText="Creation" />
        <_Builtin.Block className="section-change-log account" tag="div">
          <_Builtin.Block className="padding-global" tag="div">
            <_Builtin.Block className="container-large" tag="div">
            {
                    !connectedUser && 
              <_Builtin.Block
                className="padding-section-large account"
                tag="div"
              >
                
<_Builtin.Block
                  className="div-button-connexion google"
                  tag="div"
                  id="button-connexion-google"
                  onClick={signInGoogle}
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3C!--%20Copyright%20(c)%202016%20Google%20Inc.%20All%20rights%20reserved.%20--%3E%0A%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20118%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%203.6%20(26304)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3Egoogle_buttn%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Artboard-1%22%20transform%3D%22translate(-332.000000%2C%20-639.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22google_buttn%22%20transform%3D%22translate(332.000000%2C%20639.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22logo_googleg_48dp%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M117.6%2C61.3636364%20C117.6%2C57.1090909%20117.218182%2C53.0181818%20116.509091%2C49.0909091%20L60%2C49.0909091%20L60%2C72.3%20L92.2909091%2C72.3%20C90.9%2C79.8%2086.6727273%2C86.1545455%2080.3181818%2C90.4090909%20L80.3181818%2C105.463636%20L99.7090909%2C105.463636%20C111.054545%2C95.0181818%20117.6%2C79.6363636%20117.6%2C61.3636364%20L117.6%2C61.3636364%20Z%22%20id%3D%22Shape%22%20fill%3D%22%234285F4%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M60%2C120%20C76.2%2C120%2089.7818182%2C114.627273%2099.7090909%2C105.463636%20L80.3181818%2C90.4090909%20C74.9454545%2C94.0090909%2068.0727273%2C96.1363636%2060%2C96.1363636%20C44.3727273%2C96.1363636%2031.1454545%2C85.5818182%2026.4272727%2C71.4%20L6.38181818%2C71.4%20L6.38181818%2C86.9454545%20C16.2545455%2C106.554545%2036.5454545%2C120%2060%2C120%20L60%2C120%20Z%22%20id%3D%22Shape%22%20fill%3D%22%2334A853%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M26.4272727%2C71.4%20C25.2272727%2C67.8%2024.5454545%2C63.9545455%2024.5454545%2C60%20C24.5454545%2C56.0454545%2025.2272727%2C52.2%2026.4272727%2C48.6%20L26.4272727%2C33.0545455%20L6.38181818%2C33.0545455%20C2.31818182%2C41.1545455%200%2C50.3181818%200%2C60%20C0%2C69.6818182%202.31818182%2C78.8454545%206.38181818%2C86.9454545%20L26.4272727%2C71.4%20L26.4272727%2C71.4%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23FBBC05%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M60%2C23.8636364%20C68.8090909%2C23.8636364%2076.7181818%2C26.8909091%2082.9363636%2C32.8363636%20L100.145455%2C15.6272727%20C89.7545455%2C5.94545455%2076.1727273%2C0%2060%2C0%20C36.5454545%2C0%2016.2545455%2C13.4454545%206.38181818%2C33.0545455%20L26.4272727%2C48.6%20C31.1454545%2C34.4181818%2044.3727273%2C23.8636364%2060%2C23.8636364%20L60%2C23.8636364%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23EA4335%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L120%2C0%20L120%2C120%20L0%2C120%20L0%2C0%20Z%22%20id%3D%22Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className="text-button-connexion google"
                    tag="div"
                  >
                    {"Sign in with Google"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion apple"
                  tag="div"
                  id="button-connexion-apple"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion apple"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.0%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20300.000000%20300.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C300.000000)%20scale(0.100000%2C-0.100000)%22%20fill%3D%22currentColor%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M1325%202989%20c-104%20-12%20-271%20-54%20-363%20-90%20-217%20-86%20-377%20-194%20-542%20-365%20-202%20-209%20-334%20-463%20-392%20-757%20-31%20-157%20-31%20-395%201%20-554%2058%20-298%20189%20-549%20399%20-765%20405%20-417%20995%20-561%201543%20-378%20234%2078%20404%20184%20585%20364%20132%20132%20216%20248%20289%20400%20200%20413%20200%20899%200%201312%20-138%20285%20-392%20542%20-678%20686%20-104%2052%20-289%20113%20-402%20133%20-112%2020%20-334%2027%20-440%2014z%20m497%20-427%20c10%20-36%20-13%20-148%20-42%20-210%20-58%20-125%20-193%20-228%20-311%20-240%20l-51%20-5%204%2074%20c8%20166%20133%20322%20302%20381%2066%2023%2092%2023%2098%200z%20m-521%20-478%20c165%20-53%20192%20-54%20324%20-8%20102%2036%20118%2038%20225%2039%20112%200%20117%20-1%20190%20-36%2047%20-22%2099%20-58%20135%20-93%20l60%20-56%20-35%20-27%20c-142%20-110%20-202%20-250%20-179%20-417%2017%20-128%20114%20-265%20227%20-319%2034%20-17%2041%20-25%2036%20-42%20-12%20-41%20-98%20-192%20-153%20-269%20-161%20-226%20-275%20-275%20-456%20-196%20-75%2033%20-86%2035%20-190%2035%20-103%200%20-115%20-2%20-185%20-33%20-105%20-47%20-171%20-52%20-244%20-19%20-175%2080%20-375%20404%20-430%20697%20-32%20169%20-14%20376%2042%20487%2038%2073%20111%20160%20173%20203%20143%20100%20271%20115%20460%2054z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-button-connexion" tag="div">
                    {"Sign in with Apple"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion facebook"
                  tag="div"
                  id="button-connexion-facebook"
                  onClick={signInFacebook}
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3C!--%20Copyright%20(c)%202016%20Google%20Inc.%20All%20rights%20reserved.%20--%3E%0A%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20120%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%203.6%20(26304)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3Efacebook_buttn%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Artboard-1%22%20transform%3D%22translate(-332.000000%2C%20-456.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22facebook_buttn%22%20transform%3D%22translate(332.000000%2C%20456.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L120%2C0%20L120%2C120%20L0%2C120%20L0%2C0%20Z%22%20id%3D%22Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M113.377146%2C0%20L6.62285402%2C0%20C2.96477253%2C0%200%2C2.96432291%200%2C6.62285402%20L0%2C113.377146%20C0%2C117.034778%202.96477253%2C120%206.62285402%2C120%20L64.0955585%2C120%20L64.0955585%2C73.5298658%20L48.45744%2C73.5298658%20L48.45744%2C55.419305%20L64.0955585%2C55.419305%20L64.0955585%2C42.0634409%20C64.0955585%2C26.5638044%2073.5622382%2C18.1240492%2087.388851%2C18.1240492%20C94.011705%2C18.1240492%2099.7043021%2C18.6172788%20101.362938%2C18.837591%20L101.362938%2C35.0354823%20L91.7735131%2C35.0399784%20C84.2536737%2C35.0399784%2082.7978149%2C38.6130823%2082.7978149%2C43.8565123%20L82.7978149%2C55.419305%20L100.731676%2C55.419305%20L98.3963671%2C73.5298658%20L82.7978149%2C73.5298658%20L82.7978149%2C120%20L113.377146%2C120%20C117.034778%2C120%20120%2C117.034778%20120%2C113.377146%20L120%2C6.62285402%20C120%2C2.96432291%20117.034778%2C0%20113.377146%2C0%22%20id%3D%22Imported-Layers-Copy%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-button-connexion" tag="div">
                    {"Sign in with Facebook"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion twitter"
                  tag="div"
                  id="button-connexion-twitter"
                  onClick={signInTwitter}
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3C!--%20Copyright%20(c)%202016%20Google%20Inc.%20All%20rights%20reserved.%20--%3E%0A%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20120%2098%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%203.6%20(26304)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3Etwitter_buttn%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Artboard-1%22%20transform%3D%22translate(-332.000000%2C%20-286.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22twitter_buttn%22%20transform%3D%22translate(332.000000%2C%20273.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L120%2C0%20L120%2C120%20L0%2C120%20L0%2C0%20Z%22%20id%3D%22Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M120%2C24.8777205%20C115.584769%2C26.8358023%20110.839899%2C28.1591865%20105.859761%2C28.7543802%20C110.943048%2C25.7073046%20114.846483%2C20.8825487%20116.684736%2C15.1338381%20C111.928015%2C17.954863%20106.659058%2C20.0038041%20101.051245%2C21.1081605%20C96.560079%2C16.3233476%2090.161747%2C13.3333333%2083.0808735%2C13.3333333%20C69.4840338%2C13.3333333%2058.4606606%2C24.3562676%2058.4606606%2C37.9522294%20C58.4606606%2C39.8817806%2058.6788105%2C41.7608545%2059.0984308%2C43.562676%20C38.6371118%2C42.5360108%2020.4964337%2C32.7346282%208.35378031%2C17.8398625%20C6.2346099%2C21.4759867%205.02052014%2C25.7051099%205.02052014%2C30.2169063%20C5.02052014%2C38.7581111%209.36727752%2C46.2937196%2015.9732251%2C50.7085117%20C11.9372325%2C50.580782%208.14133655%2C49.4733531%204.82168331%2C47.6293939%20C4.81992758%2C47.7321043%204.81992758%2C47.8352537%204.81992758%2C47.9388419%20C4.81992758%2C59.8672958%2013.3062658%2C69.8179158%2024.5688577%2C72.0793006%20C22.5027982%2C72.6420132%2020.3278832%2C72.9426826%2018.0823%2C72.9426826%20C16.4959947%2C72.9426826%2014.9535828%2C72.788617%2013.4506749%2C72.5011156%20C16.5833425%2C82.2823073%2025.6754088%2C89.4000512%2036.4485899%2C89.598888%20C28.0228245%2C96.201763%2017.4072205%2C100.137679%205.87292878%2C100.137679%20C3.88587732%2C100.137679%201.92603972%2C100.021361%200%2C99.7939939%20C10.8952047%2C106.77918%2023.8362778%2C110.854676%2037.739493%2C110.854676%20C83.0233732%2C110.854676%20107.786239%2C73.3403563%20107.786239%2C40.8070522%20C107.786239%2C39.7395662%20107.762537%2C38.6777863%20107.715132%2C37.6221515%20C112.524964%2C34.1510662%20116.699221%2C29.8148433%20120%2C24.8777205%22%20id%3D%22Fill-1%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-button-connexion" tag="div">
                    {"Sign in with Twitter"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion microsoft"
                  tag="div"
                  id="button-connexion-microsoft"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2021%2021%22%3E%0A%3Ctitle%3EMS-SymbolLockup%3C%2Ftitle%3E%0A%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%229%22%20height%3D%229%22%20fill%3D%22%23f25022%22%2F%3E%0A%3Crect%20x%3D%221%22%20y%3D%2211%22%20width%3D%229%22%20height%3D%229%22%20fill%3D%22%2300a4ef%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%221%22%20width%3D%229%22%20height%3D%229%22%20fill%3D%22%237fba00%22%2F%3E%0A%3Crect%20x%3D%2211%22%20y%3D%2211%22%20width%3D%229%22%20height%3D%229%22%20fill%3D%22%23ffb900%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className="text-button-connexion microsoft"
                    tag="div"
                  >
                    {"Sign in with Microsoft"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion github"
                  tag="div"
                  id="button-connexion-github"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3C!--%20Copyright%20(c)%202016%20Google%20Inc.%20All%20rights%20reserved.%20--%3E%0A%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20120%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%203.6%20(26304)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3Egithub_buttn%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Artboard-1%22%20transform%3D%22translate(-332.000000%2C%20-120.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22github_buttn%22%20transform%3D%22translate(332.000000%2C%20120.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C60%20C0%2C71.0416667%202.6875%2C81.0625%208.0625%2C90.0625%20C13.4375%2C99.3541667%2020.7291667%2C106.666667%2029.9375%2C112%20C39.1458333%2C117.333333%2049.1666667%2C120%2060%2C120%20C70.875%2C120%2080.9375%2C117.333333%2090.1875%2C112%20C99.4375%2C106.625%20106.71875%2C99.3229167%20112.03125%2C90.09375%20C117.34375%2C80.8645833%20120%2C70.8333333%20120%2C60%20C120%2C49%20117.333333%2C38.9375%20112%2C29.8125%20C106.625%2C20.5625%2099.3229167%2C13.28125%2090.09375%2C7.96875%20C80.8645833%2C2.65625%2070.8333333%2C0%2060%2C0%20C48.9583333%2C0%2038.9375%2C2.6875%2029.9375%2C8.0625%20C20.6458333%2C13.4375%2013.3333333%2C20.7291667%208%2C29.9375%20C2.66666667%2C39.1458333%201.33469435e-14%2C49.1666667%201.4560302e-14%2C60%20L0%2C60%20Z%20M10%2C60%20C10%2C53.3333333%2011.3125%2C46.8958333%2013.9375%2C40.6875%20C16.5625%2C34.4791667%2020.1458333%2C29.125%2024.6875%2C24.625%20C29.2291667%2C20.0833333%2034.5833333%2C16.5104167%2040.75%2C13.90625%20C46.9166667%2C11.3020833%2053.3333333%2C10%2060%2C10%20C66.6666667%2C10%2073.1041667%2C11.3020833%2079.3125%2C13.90625%20C85.5208333%2C16.5104167%2090.8958333%2C20.0833333%2095.4375%2C24.625%20C99.9375%2C29.125%20103.489583%2C34.4791667%20106.09375%2C40.6875%20C108.697917%2C46.8958333%20110%2C53.3333333%20110%2C60%20C110%2C67.1666667%20108.53125%2C74%20105.59375%2C80.5%20C102.65625%2C87%2098.53125%2C92.6145833%2093.21875%2C97.34375%20C87.90625%2C102.072917%2081.8333333%2C105.5%2075%2C107.625%20L75%2C90%20C75%2C85.625%2073.2083333%2C82.2083333%2069.625%2C79.75%20C78.4166667%2C78.9583333%2084.84375%2C76.7291667%2088.90625%2C73.0625%20C92.96875%2C69.3958333%2095%2C63.5833333%2095%2C55.625%20C95%2C49.4583333%2093.1041667%2C44.2708333%2089.3125%2C40.0625%20C90.0625%2C37.8125%2090.4375%2C35.6458333%2090.4375%2C33.5625%20C90.4375%2C30.4791667%2089.7291667%2C27.6458333%2088.3125%2C25.0625%20C85.5208333%2C25.0625%2083.0208333%2C25.5208333%2080.8125%2C26.4375%20C78.6041667%2C27.3541667%2075.8958333%2C28.9375%2072.6875%2C31.1875%20C68.8125%2C30.3125%2064.8125%2C29.875%2060.6875%2C29.875%20C55.9791667%2C29.875%2051.5833333%2C30.3541667%2047.5%2C31.3125%20C44.375%2C29.0208333%2041.6770833%2C27.40625%2039.40625%2C26.46875%20C37.1354167%2C25.53125%2034.5625%2C25.0625%2031.6875%2C25.0625%20C30.3125%2C27.6875%2029.625%2C30.5208333%2029.625%2C33.5625%20C29.625%2C35.7291667%2029.9791667%2C37.9166667%2030.6875%2C40.125%20C26.8958333%2C44.2083333%2025%2C49.375%2025%2C55.625%20C25%2C63.5833333%2027.0208333%2C69.375%2031.0625%2C73%20C35.1041667%2C76.625%2041.5833333%2C78.8541667%2050.5%2C79.6875%20C48.125%2C81.2708333%2046.4791667%2C83.5833333%2045.5625%2C86.625%20C43.5208333%2C87.3333333%2041.3958333%2C87.6875%2039.1875%2C87.6875%20C37.5208333%2C87.6875%2036.0833333%2C87.3125%2034.875%2C86.5625%20C34.5%2C86.3541667%2034.15625%2C86.1354167%2033.84375%2C85.90625%20C33.53125%2C85.6770833%2033.2083333%2C85.3958333%2032.875%2C85.0625%20C32.5416667%2C84.7291667%2032.2708333%2C84.46875%2032.0625%2C84.28125%20C31.8541667%2C84.09375%2031.5833333%2C83.7708333%2031.25%2C83.3125%20C30.9166667%2C82.8541667%2030.6979167%2C82.5625%2030.59375%2C82.4375%20C30.4895833%2C82.3125%2030.2395833%2C81.9791667%2029.84375%2C81.4375%20C29.4479167%2C80.8958333%2029.2291667%2C80.6041667%2029.1875%2C80.5625%20C27.2291667%2C77.9791667%2024.8958333%2C76.6875%2022.1875%2C76.6875%20C20.7291667%2C76.6875%2020%2C77%2020%2C77.625%20C20%2C77.875%2020.3541667%2C78.2916667%2021.0625%2C78.875%20C22.3958333%2C80.0416667%2023.1041667%2C80.6666667%2023.1875%2C80.75%20C24.1875%2C81.5416667%2024.75%2C82.0416667%2024.875%2C82.25%20C26.0833333%2C83.75%2027%2C85.3958333%2027.625%2C87.1875%20C29.9583333%2C92.3958333%2033.9583333%2C95%2039.625%2C95%20C40.5416667%2C95%2042.3333333%2C94.7916667%2045%2C94.375%20L45%2C107.625%20C38.1666667%2C105.5%2032.09375%2C102.072917%2026.78125%2C97.34375%20C21.46875%2C92.6145833%2017.34375%2C87%2014.40625%2C80.5%20C11.46875%2C74%2010%2C67.1666667%2010%2C60%20L10%2C60%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L120%2C0%20L120%2C120%20L0%2C120%20L0%2C0%20Z%22%20id%3D%22Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-button-connexion" tag="div">
                    {"Sign in with Github"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion yahoo"
                  tag="div"
                  id="button-connexion-yahoo"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.0%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20225.000000%20225.000000%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%3E%0A%0A%3Cg%20transform%3D%22translate(0.000000%2C225.000000)%20scale(0.100000%2C-0.100000)%22%20fill%3D%22%23720e9e%22%20stroke%3D%22none%22%3E%0A%3Cpath%20d%3D%22M270%202241%20c-96%20-19%20-199%20-104%20-243%20-199%20l-22%20-47%200%20-870%200%20-870%2027%20-56%20c35%20-70%2097%20-132%20168%20-167%20l55%20-27%20870%200%20870%200%2057%2028%20c72%2035%20130%2093%20165%20165%20l28%2057%200%20870%200%20870%20-27%2055%20c-35%2071%20-97%20133%20-167%20168%20l-56%2027%20-845%202%20c-465%200%20-861%20-2%20-880%20-6z%20m1558%20-470%20c-1%20-4%20-64%20-153%20-138%20-330%20l-135%20-321%20-153%200%20c-85%200%20-152%204%20-150%208%202%205%2064%20153%20138%20330%20l135%20322%20153%200%20c85%200%20152%20-4%20150%20-9z%20m-1043%20-517%20c60%20-156%2081%20-202%2087%20-188%205%2011%2041%20102%2081%20204%20l73%20185%20137%203%20c75%201%20137%201%20137%20-1%200%20-3%20-91%20-224%20-203%20-493%20l-203%20-489%20-137%20-3%20c-75%20-1%20-137%200%20-137%202%200%203%2023%2060%2052%20127%2028%2067%2051%20127%2051%20133%200%206%20-66%20169%20-146%20362%20-81%20192%20-147%20353%20-147%20357%200%204%2062%207%20138%207%20l137%200%2080%20-206z%20m632%20-213%20c12%20-6%2034%20-27%2049%20-47%2081%20-105%200%20-263%20-134%20-264%20-52%200%20-89%2018%20-129%2063%20-120%20137%2052%20335%20214%20248z%22%20fill%3D%22%23720e9e%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className="text-button-connexion yahoo"
                    tag="div"
                  >
                    {"Sign in with Yahoo"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion email"
                  tag="div"
                  id="button-connexion-mail"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3C!--%20Copyright%20(c)%202016%20Google%20Inc.%20All%20rights%20reserved.%20--%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23FFFFFF%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M20%204H4c-1.1%200-1.99.9-1.99%202L2%2018c0%201.1.9%202%202%202h16c1.1%200%202-.9%202-2V6c0-1.1-.9-2-2-2zm0%204l-8%205-8-5V6l8%205%208-5v2z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-button-connexion" tag="div">
                    {"Sign in with email"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="div-button-connexion phone"
                  tag="div"
                  id="button-connexion-phone"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-button-connexion"
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3C!--%20Copyright%20(c)%202016%20Google%20Inc.%20All%20rights%20reserved.%20--%3E%0A%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20120%20120%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%203.6%20(26304)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3Efacebook_buttn%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Artboard-1%22%20transform%3D%22translate(-332.000000%2C%20-456.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22facebook_buttn%22%20transform%3D%22translate(332.000000%2C%20456.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L120%2C0%20L120%2C120%20L0%2C120%20L0%2C0%20Z%22%20id%3D%22Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M113.377146%2C0%20L6.62285402%2C0%20C2.96477253%2C0%200%2C2.96432291%200%2C6.62285402%20L0%2C113.377146%20C0%2C117.034778%202.96477253%2C120%206.62285402%2C120%20L64.0955585%2C120%20L64.0955585%2C73.5298658%20L48.45744%2C73.5298658%20L48.45744%2C55.419305%20L64.0955585%2C55.419305%20L64.0955585%2C42.0634409%20C64.0955585%2C26.5638044%2073.5622382%2C18.1240492%2087.388851%2C18.1240492%20C94.011705%2C18.1240492%2099.7043021%2C18.6172788%20101.362938%2C18.837591%20L101.362938%2C35.0354823%20L91.7735131%2C35.0399784%20C84.2536737%2C35.0399784%2082.7978149%2C38.6130823%2082.7978149%2C43.8565123%20L82.7978149%2C55.419305%20L100.731676%2C55.419305%20L98.3963671%2C73.5298658%20L82.7978149%2C73.5298658%20L82.7978149%2C120%20L113.377146%2C120%20C117.034778%2C120%20120%2C117.034778%20120%2C113.377146%20L120%2C6.62285402%20C120%2C2.96432291%20117.034778%2C0%20113.377146%2C0%22%20id%3D%22Imported-Layers-Copy%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="text-button-connexion" tag="div">
                    {"Sign in with phone"}
                  </_Builtin.Block>
                </_Builtin.Block>
                
                

                
              </_Builtin.Block>
              }

              {
                connectedUser && <Stack sx={{py:10}} justifyContent={'center'} alignItems={'center'}>
                    <_Builtin.Block
                    style={{width:'50%'}}
                className="div-button-connexion email"
                tag="div"
                id="button-connexion-mail"
                onClick={signOutAccount}
              >
                <_Builtin.Block className="text-button-connexion" tag="div">
                  {"Logout"}
                </_Builtin.Block>
              </_Builtin.Block>
                </Stack>
              }
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <FooterComponent />
    </_Component>
  );
}
