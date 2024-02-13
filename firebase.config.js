import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//require('dotenv').config({path: "./vars/.env.local"});
//require('dotenv').config({path: "./vars/.env"});


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8PLiUF_jgNtt5fS-4Zc8GDMzbxcyapgw",
  authDomain: "dedal-e.firebaseapp.com",
  projectId: "dedal-e",
  storageBucket: "dedal-e.appspot.com",
  messagingSenderId: "327877352541",
  appId: "1:327877352541:web:cd489a9153539f3eaac1b4",
  measurementId: "G-SW9TYFNRN9"
};

/*
const firebaseConfig = {
  apiKey: "AIzaSyD52vVRfDYZgLdp0x9ykT5RbAS55dC2j10",
  authDomain: "winnobearznft.firebaseapp.com",
  projectId: "winnobearznft",
  storageBucket: "winnobearznft.appspot.com",
  messagingSenderId: "462203420048",
  appId: "1:462203420048:web:2421178264238d2e018715",
  measurementId: "G-R0FZ8NJJ41"
};
*/
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);