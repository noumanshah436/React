import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCvkI-eNkAehqKbv3CsIWL8Vgmmtn6rrfs",
  authDomain: "tutorial-80678.firebaseapp.com",
  projectId: "tutorial-80678",
  storageBucket: "tutorial-80678.appspot.com",
  messagingSenderId: "392419082866",
  appId: "1:392419082866:web:36a81689cabab5d833f8eb"

  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "tutorial-bf73d.firebaseapp.com",
  // projectId: "tutorial-bf73d",
  // storageBucket: "tutorial-bf73d.appspot.com",
  // messagingSenderId: "819711424563",
  // appId: "1:819711424563:web:ff2527a5348b36a80d0b46",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
