import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyCvkI-eNkAehqKbv3CsIWL8Vgmmtn6rrfs",
  authDomain: "tutorial-80678.firebaseapp.com",
  projectId: "tutorial-80678",
  storageBucket: "tutorial-80678.appspot.com",
  messagingSenderId: "392419082866",
  appId: "1:392419082866:web:36a81689cabab5d833f8eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

if(process.env.NODE_ENV !== "production"){
  connectFunctionsEmulator(getFunctions(app), "localhost", 5001)
}
