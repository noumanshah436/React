// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlddfxeK6ZNkbDYvkuYrcj-s5W9Sb2rY",
  authDomain: "expence-tracker-7d443.firebaseapp.com",
  projectId: "expence-tracker-7d443",
  storageBucket: "expence-tracker-7d443.appspot.com",
  messagingSenderId: "1010214503317",
  appId: "1:1010214503317:web:91da466e75f92f5763ec9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
