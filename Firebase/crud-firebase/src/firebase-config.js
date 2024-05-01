import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyC80PT0gbDFO-oSAEONEYBV_vYtvIrQwkA",
  // authDomain: "react-crud-76c4f.firebaseapp.com",
  // projectId: "react-crud-76c4f",
  // storageBucket: "react-crud-76c4f.appspot.com",
  // messagingSenderId: "492523212834",
  // appId: "1:492523212834:web:2bc1d429702b6099407a7b",
  // measurementId: "G-R51ZXNT6VZ",

  apiKey: "AIzaSyCvkI-eNkAehqKbv3CsIWL8Vgmmtn6rrfs",
  authDomain: "tutorial-80678.firebaseapp.com",
  projectId: "tutorial-80678",
  storageBucket: "tutorial-80678.appspot.com",
  messagingSenderId: "392419082866",
  appId: "1:392419082866:web:36a81689cabab5d833f8eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
