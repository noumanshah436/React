import { initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvkI-eNkAehqKbv3CsIWL8Vgmmtn6rrfs",
  authDomain: "tutorial-80678.firebaseapp.com",
  projectId: "tutorial-80678",
  storageBucket: "tutorial-80678.appspot.com",
  messagingSenderId: "392419082866",
  appId: "1:392419082866:web:36a81689cabab5d833f8eb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app)

if (process.env.NODE_ENV !== "production") {
  console.log("Using local functions");
  connectFunctionsEmulator(getFunctions(app), "localhost", 5001);

  console.log("Using local auth");
  connectAuthEmulator(auth,'http://127.0.0.1:9099');


  console.log("Using local firestore");
  connectFirestoreEmulator(db, "localhost", 8080);

  console.log("Using local firebase storage");
  connectStorageEmulator(storage, "localhost", 9199);
}

export { app, auth, db, storage };
