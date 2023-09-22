import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBd3ARrWimmXbkTl3xhQNNG6Nf5Y8wXl9M",
  authDomain: "slack-clone-d13ca.firebaseapp.com",
  projectId: "slack-clone-d13ca",
  storageBucket: "slack-clone-d13ca.appspot.com",
  messagingSenderId: "983811815034",
  appId: "1:983811815034:web:8c7b29e9aece2c9e1eedc3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
