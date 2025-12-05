// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp(
  {
    apiKey: "AIzaSyCBu4SKzloEgUdFqBx_skrhIOE3ztBTwX8",
    authDomain: "reminder-b2583.firebaseapp.com",
    projectId: "reminder-b2583",
    storageBucket: "reminder-b2583.appspot.com",
    messagingSenderId: "107125240224",
    appId: "1:107125240224:web:7eed61aa1bd65d94a1b4c5",
    measurementId: "G-S84CS7FP16"
  }
);

// const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConfig);

export {db}