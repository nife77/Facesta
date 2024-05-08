// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEOcSf3Nfr3eS3R49JFaymLQ2lDRoFJ3g",
  authDomain: "insta-clone-yt-1c904.firebaseapp.com",
  projectId: "insta-clone-yt-1c904",
  storageBucket: "insta-clone-yt-1c904.appspot.com",
  messagingSenderId: "855561186505",
  appId: "1:855561186505:web:285b35d1686f00bcf1b118",
  measurementId: "G-G8VYHQPRC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };