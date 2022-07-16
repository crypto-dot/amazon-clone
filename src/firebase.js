import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOyX3BzkP2tsEFlx1TNmf7BGnJCl1pCuA",
  authDomain: "clone-e1507.firebaseapp.com",
  projectId: "clone-e1507",
  storageBucket: "clone-e1507.appspot.com",
  messagingSenderId: "73968513517",
  appId: "1:73968513517:web:8c2921da5a0e39338977e4",
  measurementId: "G-0C48CZZT53"
};

  const fireBaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};