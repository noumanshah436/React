import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB2G_AtTaKlbJIiuChgMdACUG15LlYHIY",
  authDomain: "authentication-tutorial-9e1a6.firebaseapp.com",
  projectId: "authentication-tutorial-9e1a6",
  storageBucket: "authentication-tutorial-9e1a6.appspot.com",
  messagingSenderId: "142680116053",
  appId: "1:142680116053:web:6a812765c6d1f2f2903ddc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
