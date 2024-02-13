import firebase from 'firebase/app';
import 'firebase/auth'
import { firebaseConfig } from '@/firebase.config.js';



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export {firebase}