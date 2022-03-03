import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwasa9yD3570UhxC4HQRpWoD3yFP0OyQo",
  authDomain: "whatsapp-clone-b3dbf.firebaseapp.com",
  projectId: "whatsapp-clone-b3dbf",
  storageBucket: "whatsapp-clone-b3dbf.appspot.com",
  messagingSenderId: "1047917542869",
  appId: "1:1047917542869:web:a7e39633bcd95728d9515c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, auth, provider };
